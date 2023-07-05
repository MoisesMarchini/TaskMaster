import { TaskManager } from "../tasks/task-manager";
import { Board } from "./models/board";

const key = 'boards'

const defaultBoards: Board[] = [
  {
    id: 'board-001',
    name: 'A Fazer',
    color: 'primary'
  },
  {
    id: 'board-002',
    name: 'Em Progresso',
    color: 'highlight'
  },
  {
    id: 'board-003',
    name: 'Concluído',
    color: 'success'
  },
]

const BOARDS = () => {
  const storageValues = localStorage.getItem(key);
  if (!storageValues)
    return defaultBoards;


  return JSON.parse(storageValues) as Board[];
}

export const BoardManager = {
  get boards() {
    return BOARDS();
  },
  set boards(value: Board[]) {
    localStorage.setItem(key, JSON.stringify(value));
  },
}
