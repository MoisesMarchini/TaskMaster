import { Task } from './models/task';
export const TaskManager = {
  taskList: [] as Task[],

  uncompletedTasks: (tasks?: Task[]) => {
    return (tasks?? TaskManager.taskList).filter(p=> !p.completed && !p.disabled)
  },
  completedTasks: (tasks?: Task[]) => {
    return (tasks?? TaskManager.taskList).filter(p=> p.completed === true && !p.disabled)
  },
}
