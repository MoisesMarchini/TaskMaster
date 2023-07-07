import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { BoardManager } from '../../boards/board-manager';
import { TaskManager } from '../task-manager';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  newTask(task: Task, boardId: string) {
    const taskList = TaskManager.tasks;
    const genericId = (TaskManager.tasks.length + 1).toString();

    const _task: Task = {
      id: genericId,
      index: TaskManager.tasks.length,
      title: task.title,
      boardId: boardId,
      comments: task.comments,
      createdAt: new Date
    }

    taskList.push(_task);
    TaskManager.tasks = taskList;
    return _task;
  }

  disableTask(task: Task) {
    task.disabled = true;

    return this.updateTask(task);
  }

  updateTask(task: Task) {
    const taskList = TaskManager.tasks;
    const _task = taskList.find(p => p.id === task.id);
    if (!_task)
      return;

    Object.assign(_task, task);
    TaskManager.tasks = taskList;
    return _task;
  }

  updateTasks(tasks: Task[]) {
    const taskList = TaskManager.tasks;
    tasks.forEach(task => {
      const _task = taskList.find(p => p.id === task.id);
      if (!_task)
        return;

      Object.assign(_task, task);
    })
    TaskManager.tasks = taskList;
    return taskList;
  }
}
