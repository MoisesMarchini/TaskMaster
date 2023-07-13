import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { AddBoardComponent } from './components/add-board/add-board.component';
import { EditBoardComponent } from './components/edit-board/edit-board.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    MatMenuModule,
    MatIconModule,
    MatBottomSheetModule,
    FormsModule,
    MatInputModule,
  ],
  declarations: [
    BoardComponent,
    AddBoardComponent,
    EditBoardComponent
  ]
})
export class BoardsModule { }
