export interface Task {
  id?: string,
  index: number,
  title: string,
  boardId: string,
  comments: string[],
  disabled?: boolean,
  createdAt?: Date,
  finishedAt?: Date
}
