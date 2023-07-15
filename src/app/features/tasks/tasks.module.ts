import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksDialogModule } from './dialogs/tasks-dialog.module';
import { TasksComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    CommonModule,
    TasksDialogModule,
    TasksComponentsModule
  ],
  declarations: [
  ],
})
export class TasksModule { }
