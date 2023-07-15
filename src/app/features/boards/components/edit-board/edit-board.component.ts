import { Component, OnInit } from '@angular/core';
import { Board, BoardColor } from '../../models/board';
import { BoardsService } from '../../services/boards.service';
import { NgForm } from '@angular/forms';
import { BoardManager } from '../../board-manager';

@Component({
  selector: 'app-edit-board',
  templateUrl: '../boards-dialog.component.html',
  styleUrls: ['../../boards-dialog.scss']
})
export class EditBoardComponent implements OnInit {
  public static id: string;
  title = 'Editar Quadro';
  id?: string;
  board: Board = {
    name: '',
    color: BoardColor.blue
  }

  boardColorOptions: { name: string, color: BoardColor }[] = [];

  constructor(
    private boardsService: BoardsService,
  ) { }

  ngOnInit() {
    this.id = EditBoardComponent.id;
    const existedBoard = BoardManager.boards.find(board => board.id === this.id);
    Object.assign(this.board, existedBoard);
    
    const boardColorNames = ['azul', 'azul claro', 'vermelho', 'amarelo', 'roxo', 'rosa', 'laranja', 'verde']
    let index = 0;

    for (const color of Object.keys(BoardColor)) {
      this.boardColorOptions.push({
        name: boardColorNames[index],
        color: BoardColor[color as BoardColor]
      });
      index++;
    };
  }

  setColor(value: BoardColor) {
    this.board.color = value;
  }

  onSubmit(form: NgForm) {
    if(form.invalid)
      return;

    this.boardsService.editBoard(this.board, this.id?? '');
  }

}
