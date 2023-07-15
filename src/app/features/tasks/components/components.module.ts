import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskCardComponent } from './task-card/task-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
  ],
  declarations: [
    TaskCardComponent,
  ],
  exports: [
    TaskCardComponent,
  ]
})
export class TasksComponentsModule { }
