import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Board } from '../../models/board';
import { BoardsService } from '../../services/boards.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.css']
})
export class AddBoardComponent implements OnInit {
  board: Board = {
    name: '',
    color: ''
  }

  constructor(
    private boardsService: BoardsService,
    private _bottomSheetRef: MatBottomSheetRef<AddBoardComponent>
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if(form.invalid)
      return;

    this.boardsService.newBoard(this.board);
    this._bottomSheetRef.dismiss();
  }

}
