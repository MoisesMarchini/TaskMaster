import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../features/tasks/models/task';
import { BoardManager } from 'src/app/features/boards/board-manager';
import { EditTaskComponent } from 'src/app/features/tasks/components/edit-task/edit-task.component';
import { TaskService } from '../../../features/tasks/services/task.service';
import { MatDialog } from '@angular/material/dialog';

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
  boardColor = '';

  constructor(
    public dialog: MatDialog,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.boards = BoardManager.boards.filter(board => board.id !== this.task?.boardId);
    this.boardColor = BoardManager.boards.find(board => board.id === this.task?.boardId)?.color?? '';
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
    this.dialog.open(EditTaskComponent);
  }

}
