import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskManager } from '../../task-manager';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  public static id: string;
  id?: string;
  task: Task = {
    title: '',
    index: -1,
    comments: [],
    boardId: '',
  }

  constructor(
    private taskService: TaskService,
    private _bottomSheetRef: MatBottomSheetRef<EditTaskComponent>
  ) { 
  }

  ngOnInit() {
    this.id = EditTaskComponent.id;
    const existedTask = TaskManager.tasks.find(task => task.id === this.id);
    Object.assign(this.task , existedTask);
  }

  onSubmit(form: NgForm) {
    if(form.invalid)
      return;
    
    this.taskService.editTask(this.task);
    this._bottomSheetRef.dismiss();
  }

}
