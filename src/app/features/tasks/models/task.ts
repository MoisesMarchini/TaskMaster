export interface Task {
  id?: string,
  title: string,
  completed?: boolean,
  disabled?: boolean,
  createdAt?: Date,
  finishedAt?: Date
}
