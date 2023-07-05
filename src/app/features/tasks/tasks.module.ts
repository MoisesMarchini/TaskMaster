import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddTaskComponent } from './components/add-task/add-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AddTaskComponent,
    EditTaskComponent,
  ],
})
export class TasksModule { }
