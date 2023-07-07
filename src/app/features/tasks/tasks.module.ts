import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule
  ],
  declarations: [
    AddTaskComponent,
    EditTaskComponent,
  ],
})
export class TasksModule { }
