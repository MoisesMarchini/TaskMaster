import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskCardComponent } from './task-card/task-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    CollapseModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    TaskCardComponent,
  ],
  exports: [
    TaskCardComponent,
  ]
})
export class TasksComponentsModule { }
