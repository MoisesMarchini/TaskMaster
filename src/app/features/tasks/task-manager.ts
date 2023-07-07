import { Task } from "./models/task";

const key = 'tasks'

const TASKS = () => {
  const storageValues = localStorage.getItem(key);
  if (!storageValues)
    return [];


  return JSON.parse(storageValues) as Task[];
}

export const TaskManager = {
  get tasks() {
    return TASKS();
  },

  set tasks(value: Task[]) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  clearData() {
    this.tasks = [];
  }
}
