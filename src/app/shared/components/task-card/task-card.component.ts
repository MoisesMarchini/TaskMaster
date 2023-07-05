import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../features/tasks/models/task';
import { BoardManager } from 'src/app/features/boards/board-manager';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() task?: Task;
  @Output() onChangesEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setBoard(boardId?: string) {
    if (!this.task)
      return;

    if (!boardId)
      boardId = BoardManager.boards[0].id ?? 'board-003';

    this.task.index = -1;
    this.task.boardId = boardId;
    this.onChangesEvent.emit();
  }

}
