import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBoardComponent } from './edit-board/edit-board.component';
import { AddBoardComponent } from './add-board/add-board.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    SharedModule,
  ],
  declarations: [
    AddBoardComponent,
    EditBoardComponent
  ]
})
export class BoardsDialogModule { }
