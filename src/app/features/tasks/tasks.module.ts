import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskListComponent } from './components/task-list/task-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { TaskCardComponent } from './components/task-card/task-card.component';

@NgModule({
  declarations: [
    TaskListComponent,
    AddTaskComponent,
    EditTaskComponent,
    TaskCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TasksModule { }
