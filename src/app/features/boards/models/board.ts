import { Task } from "../../tasks/models/task";

export interface Board {
  id?: string,
  name: string,
  disabled?: boolean,
  color: string,
}

export interface BoardViewModel {
  id?: string,
  name: string,
  collapsed: boolean,
  tasks: Task[],
  color: string,
}
