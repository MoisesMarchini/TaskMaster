import { Task } from "../../tasks/models/task";

export interface Board {
  id?: string,
  userId?: string,
  name: string,
  disabled?: boolean,
  isCompleted?: boolean,
  color: 'primary' | 'highlight' | 'success' | 'red' | 'dark' | 'yellow' | 'purple' | string,
}

export interface BoardViewModel {
  id?: string,
  name: string,
  collapsed: boolean,
  isCompleted?: boolean,
  tasks: Task[],
  color: 'primary' | 'highlight' | 'success' | 'red' | 'dark' | 'yellow' | 'purple' | string,
}
