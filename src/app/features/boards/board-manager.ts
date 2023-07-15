import { Board, BoardColor } from "./models/board";

const key = 'boards'

const defaultBoards: Board[] = [
  {
    id: 'board-001',
    name: 'A Fazer',
    color: BoardColor.blue
  },
  {
    id: 'board-002',
    name: 'Em Progresso',
    color: BoardColor.orange
  },
  {
    id: 'board-003',
    name: 'Concluído',
    color: BoardColor.green
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

  clearData() {
    this.boards = defaultBoards;
  }
}

