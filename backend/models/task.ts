export interface Task {
  id?: string,
  userId?: string,
  boardId: string,
  index: number,
  title: string,
  comments: string[],
  disabled?: boolean,
  createdAt?: Date,
  finishedAt?: Date
}
