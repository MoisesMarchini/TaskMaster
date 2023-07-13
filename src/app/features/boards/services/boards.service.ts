import { Injectable } from '@angular/core';
import { Board, BoardViewModel } from '../models/board';
import { BoardManager } from '../board-manager';
import { TaskManager } from '../../tasks/task-manager';
import { TaskService } from '../../tasks/services/task.service';
import { Task } from '../../tasks/models/task';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  private static boards: BoardViewModel[];

  constructor(private taskService: TaskService) { }

  init() {
    BoardsService.boards = BoardManager.boards.filter(p => !p.disabled).map(b => {
      const _board: BoardViewModel = {
        id: b.id,
        name: b.name,
        tasks: TaskManager.tasks.filter(p => p.boardId === b.id && !p.disabled).sort((a, b) => a.index - b.index),
        color: b.color,
        collapsed: false
      }
      return _board;
    });
  }

  getBoards() {
    return BoardsService.boards;
  }

  updateBoards(from: 'boardManager' | 'boardService' = 'boardManager') {
    const original = BoardManager.boards;

    if(from === 'boardManager'){
      BoardsService.boards = original.filter(p => !p.disabled).map(b => {
        const _board: BoardViewModel = {
          id: b.id,
          name: b.name,
          tasks: TaskManager.tasks.filter(p => p.boardId === b.id && !p.disabled).sort((a, b) => a.index - b.index),
          color: b.color,
          collapsed: false
        }
        return _board;
      });
      this.updateBoardsTask();
      return;
    }

    const tasks = BoardsService.boards.flatMap(board => board.tasks);
    BoardsService.boards = BoardsService.boards.map(b => {
      const _board: BoardViewModel = {
        id: b.id,
        name: b.name,
        tasks: tasks.filter(p => p.boardId === b.id).sort((a, b) => a.index - b.index),
        color: b.color,
        collapsed: false
      }
      return _board;
    });
  }

  updateBoardsTask() {
    const tasks = BoardsService.boards.flatMap(p => {
      const _tasks = p.tasks as Task[];
      return _tasks.map((task, index) => {
        task.boardId = p.id!;
        task.index = index;
        return task;
      })
    });
    this.taskService.updateTasks(tasks);
    this.updateBoards('boardService');
  }

  editBoard(newBoard: Board, boardId: string) {
    const _boards = BoardManager.boards;
    const existedBoard = _boards.find(p => p.id === boardId);
    if (!existedBoard)
      return;

    Object.assign(existedBoard, newBoard);
    BoardManager.boards = _boards;
    this.updateBoards();
  }

  newBoard(board: Board) {
    const _boards = BoardManager.boards;
    const boardId = 'custom-board-' + BoardManager.boards.length + 1;

    board.id = boardId;
    _boards.push(board);

    BoardManager.boards = _boards;
    this.updateBoards();
  }
}
