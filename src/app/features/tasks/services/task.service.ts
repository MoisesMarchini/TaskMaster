import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { TaskManager } from '../task-manager';

@Injectable()
export class TaskService {

  constructor() { }

  newTask(task: Task) {
    const genericId = (TaskManager.taskList.length + 1).toString();
    const _task: Task = {
      id: genericId,
      title: task.title,
      createdAt: new Date
    }

    TaskManager.taskList.push(task);
    return _task;
  }

  disableTask(task: Task) {
    task.disabled = true;

    this.updateTask(task);
    return task;
  }

  taskCompleted(task: Task) {
    task.completed = true;
    task.finishedAt = new Date();

    this.updateTask(task);
    return task;
  }

  taskUncompleted(task: Task) {
    task.completed = false;
    task.finishedAt = undefined;

    this.updateTask(task);
    return task;
  }

  private updateTask(task: Task) {
    const storageTask = TaskManager.taskList.find(p => p.id === task.id);
    if (storageTask)
      Object.assign(storageTask, task);
  }
}
