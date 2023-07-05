import { Component, OnInit } from '@angular/core';
import { BoardManager } from '../../board-manager'
import { Router } from '@angular/router';
import { TaskManager } from 'src/app/features/tasks/task-manager';
import { Board, BoardViewModel } from '../../models/board';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskService } from 'src/app/features/tasks/services/task.service';
import { Task } from 'src/app/features/tasks/models/task';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boards: BoardViewModel[] = [];

  constructor(
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.updateBoards();
  }

  newTask() {
    this.router.navigateByUrl('/add-task');
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.updateBoardTasks();
  }

  changeTaskBoard() {
    this.updateBoardsAfterChange();
    this.updateBoardTasks();
  }

  updateBoardsAfterChange() {
    const tasks = this.boards.flatMap(board => board.tasks);
    this.boards = this.boards.map(b => {
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

  updateBoards() {
    this.boards = BoardManager.boards.filter(p => !p.disabled).map(b => {
      const _board: BoardViewModel = {
        id: b.id,
        name: b.name,
        tasks: TaskManager.tasks.filter(p => p.boardId === b.id).sort((a, b) => a.index - b.index),
        color: b.color,
        collapsed: false
      }
      return _board;
    });
  }

  updateBoardTasks() {
    const tasks = this.boards.flatMap(p => {
      const _tasks = p.tasks as Task[];
      return _tasks.map((task, index) => {
        task.boardId = p.id!;
        task.index = index;
        return task;
      })
    });
    tasks.forEach(p => this.taskService.updateTask(p));
  }

}
