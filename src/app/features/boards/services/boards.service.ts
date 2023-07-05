import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { BoardManager } from '../board-manager';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  constructor() { }

  editBoard(newBoard: Board, boardId: string) {
    const existedBoard = BoardManager.boards.find(p => p.id === boardId);
    if (!existedBoard)
      return;

    Object.assign(existedBoard, newBoard);
    this.save();
  }

  newBoard(board: Board) {
    const boardId = 'custom-board-' + BoardManager.boards.length + 1;

    board.id = boardId;
    BoardManager.boards.push(board);
    this.save();
  }

  save() {
    console.log(BoardManager.boards)
    BoardManager.boards = BoardManager.boards;
  }
}
