import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskManager } from '../../task-manager';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { BoardsService } from '../../../boards/services/boards.service';
import { SharedFunctions } from '../shared-functions';

@Component({
  selector: 'app-edit-task',
  templateUrl: '../tasks-dialog.component.html',
  styleUrls: ['../tasks-dialog.component.css']
})
export class EditTaskComponent implements OnInit {
  public static id: string;
  title = 'Editar Tarefa'
  id?: string;
  task: Task = {
    title: '',
    index: -1,
    comments: [],
    boardId: '',
  }

  constructor(
    private taskService: TaskService,
    private boardsService: BoardsService,
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

    SharedFunctions.clearEmptyComments(this.task);
    this.taskService.updateTask(this.task);
    this.boardsService.updateBoards();
  }

  addComment() {
    SharedFunctions.addComment(this.task)
  }

  removeComment(index: number) {
    SharedFunctions.removeComment(this.task, index)
  }

  getCommentsLength() {
    return SharedFunctions.getCommentsLength(this.task);
  }
}
