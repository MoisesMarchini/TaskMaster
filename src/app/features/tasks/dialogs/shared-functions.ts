import { Task } from "../models/task";

export const SharedFunctions = {

  addComment(task: Task) {
    if (task.comments.find(c => !c || c == '') === undefined)
      task.comments.push('');
  },

  clearEmptyComments(task: Task) {
    task.comments = task.comments.filter(c => c !== '');
  },

  removeComment(task: Task, index: number) {
    task.comments = task.comments.filter((c, _index)=> _index !== index);
  },

  getCommentsLength(task: Task) {
    const length = task.comments.length;
    return Array.from({ length }, (_, index) => index).sort((n1, n2) => n2 - n1);
  },
}
