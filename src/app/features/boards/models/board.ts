import { Task } from "../../tasks/models/task";

export interface Board {
  id?: string,
  userId?: string,
  name: string,
  disabled?: boolean,
  isCompleted?: boolean,
  color: BoardColor,
}

export interface BoardViewModel {
  id?: string,
  name: string,
  collapsed: boolean,
  isCompleted?: boolean,
  tasks: Task[],
  color: BoardColor,
}

export enum BoardColor {
  blue = 'blue',
  cyan = 'cyan',
  red = 'red',
  yellow = 'yellow',
  purple = 'purple',
  pink = 'pink',
  orange = 'orange',
  green = 'green',
}
