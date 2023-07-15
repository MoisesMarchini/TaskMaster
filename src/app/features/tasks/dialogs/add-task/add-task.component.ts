import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { BoardManager } from 'src/app/features/boards/board-manager';
import { TaskService } from '../../services/task.service';
import { NgForm } from '@angular/forms';
import { BoardsService } from '../../../boards/services/boards.service';

@Component({
  selector: 'app-add-task',
  templateUrl: '../tasks-dialog.component.html',
  styleUrls: ['../tasks-dialog.component.css']
})
export class AddTaskComponent implements OnInit {
  title = 'Nova Tarefa'
  task: Task = {
    title: '',
    index: -1,
    comments: [],
    boardId: '',
  }

  constructor(
    private taskService: TaskService,
    private boardsService: BoardsService,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if(form.invalid)
      return;

    this.taskService.newTask(this.task);
    this.boardsService.updateBoards();
  }

}
