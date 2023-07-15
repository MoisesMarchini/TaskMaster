import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BoardComponent } from './components/board/board.component';
import { AddBoardComponent } from './components/add-board/add-board.component';
import { EditBoardComponent } from './components/edit-board/edit-board.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule,
  ],
  declarations: [
    BoardComponent,
    AddBoardComponent,
    EditBoardComponent
  ]
})
export class BoardsModule { }
