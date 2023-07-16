import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../models/task';
import { BoardManager } from 'src/app/features/boards/board-manager';
import { EditTaskComponent } from 'src/app/features/tasks/dialogs/edit-task/edit-task.component';
import { TaskService } from '../../services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { DefaultDialogService, DefaultDialog } from 'src/app/shared/components/default-dialog/default-dialog.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() task?: Task;
  @Input() isLast: boolean = false;
  @Output() onChangesEvent = new EventEmitter();

  isCommentsCollapsed = true;

  boards = BoardManager.boards.filter(board => board.id !== this.task?.boardId);
  boardColor = '';

  constructor(
    public dialog: MatDialog,
    private defaultDialogService: DefaultDialogService,
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

    const dialog: DefaultDialog = {
      title: 'Deletar Quadro',
      contentHTML:
        `<p class="mx-auto">
        Tem certeza que deseja deletar a tarefa <strong>${this.task?.title}</strong>?
      </p>`,
      confirmBtnColor: 'red',
      confirmBtnText: 'Excluir'
    };

    const onConfirm = () => {
      if (!this.task)
        return;

      this.task.disabled = true;
      this.taskService.updateTask(this.task)
      this.onChangesEvent.emit();
    };

    this.defaultDialogService.openDialog(dialog, onConfirm);
  }

  editTask() {
    EditTaskComponent.id = this.task?.id?? '';
    this.dialog.open(EditTaskComponent);
  }

}
