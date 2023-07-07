import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../features/tasks/models/task';
import { BoardManager } from 'src/app/features/boards/board-manager';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { EditTaskComponent } from 'src/app/features/tasks/components/edit-task/edit-task.component';
import { TaskService } from '../../../features/tasks/services/task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() task?: Task;
  @Input() isLast: boolean = false;
  @Output() onChangesEvent = new EventEmitter();

  boards = BoardManager.boards.filter(board => board.id !== this.task?.boardId);

  constructor(
    private _bottomSheet: MatBottomSheet,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.boards = BoardManager.boards.filter(board => board.id !== this.task?.boardId);
  }

  setBoard(boardId?: string) {
    if (!this.task)
      return;

    if (!boardId)
      boardId = BoardManager.boards[0].id ?? 'board-003';

    this.task.index = -1;
    this.task.boardId = boardId;
    this.taskService.updateTask(this.task)
    this.onChangesEvent.emit();
  }

  deleteTask(){
    if (!this.task)
      return;

    this.task.disabled = true;
    this.taskService.updateTask(this.task)
    this.onChangesEvent.emit();
  }

  editTask() {
    EditTaskComponent.id = this.task?.id?? '';
    this._bottomSheet.open(EditTaskComponent);
  }

}
