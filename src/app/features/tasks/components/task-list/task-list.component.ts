import { Component, OnInit } from '@angular/core';
import { TaskManager } from '../../task-manager';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  uncompletedTasks = () => TaskManager.uncompletedTasks();
  completedTasks = () => TaskManager.completedTasks();

  constructor() { }

  ngOnInit() {
  }

}
