import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BoardComponent } from './components/board/board.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { BoardsDialogModule } from './dialogs/boards-dialog.module';
import { TasksComponentsModule } from '../tasks/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    FormsModule,
    MatDialogModule,
    BoardsDialogModule,
    TasksComponentsModule,
  ],
  declarations: [
    BoardComponent,
  ]
})
export class BoardsModule { }
