import { Component, OnInit } from '@angular/core';
import { Board, BoardColor } from '../../models/board';
import { BoardsService } from '../../services/boards.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-board',
  templateUrl: '../boards-dialog.component.html',
  styleUrls: ['../boards-dialog.scss']
})
export class AddBoardComponent implements OnInit {
  title = "Novo Quadro";
  board: Board = {
    name: '',
    color: BoardColor.blue
  }

  boardColorOptions: { name: string, color: BoardColor }[] = [];

  constructor(
    private boardsService: BoardsService,
  ) { }

  ngOnInit() {
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

    this.boardsService.newBoard(this.board);
  }

}
