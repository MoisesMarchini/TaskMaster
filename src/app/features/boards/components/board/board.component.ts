import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { BoardManager } from '../../board-manager'
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AddTaskComponent } from 'src/app/features/tasks/dialogs/add-task/add-task.component';
import { BoardsService } from '../../services/boards.service';
import { AppOptions } from 'src/app/core/app-options';
import { LoaderService } from '../../../../shared/components/loader/loader.service';
import { AddBoardComponent } from '../../dialogs/add-board/add-board.component';
import { MatDialog } from '@angular/material/dialog';
import { EditBoardComponent } from '../../dialogs/edit-board/edit-board.component';
import { Board, BoardViewModel } from '../../models/board';
import { DefaultDialog } from 'src/app/shared/components/default-dialog/default-dialog.service';
import { DefaultDialogService } from '../../../../shared/components/default-dialog/default-dialog.service';
import { TaskService } from 'src/app/features/tasks/services/task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  get boards() {
    return this.boardsService.getBoards();
  }

  getOtherBoards(board: BoardViewModel) {
    return this.boards.filter(p => p.id !== board.id);
  }

  constructor(
    private boardsService: BoardsService,
    private taskService: TaskService,
    public dialog: MatDialog,
    public defaultDialogService: DefaultDialogService,
    public loaderService: LoaderService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!AppOptions.tutorial){
      this.router.navigateByUrl('/splash');
      return;
    }

    this.updateBoards();
    this.loaderService.hideLoader(2000);
  }

  drop(event: CdkDragDrop<any[]>, updateList: 'task' | 'board') {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    this.updateBoardTasks();

    if (updateList === 'board') {
      BoardManager.boards = this.boards;
    }
  }

  moveTasksTo(boardOrigin: BoardViewModel, boardDestiny: BoardViewModel) {
    const tasks = [...boardOrigin.tasks];
    tasks.forEach(task => {
      task.boardId = boardDestiny.id ?? task.boardId;
    });

    this.taskService.updateTasks(tasks)
    this.updateBoards();
  }

  deleteTasks(board: BoardViewModel) {
    const dialog: DefaultDialog = {
      title: 'Deletar Tarefas do Quadro',
      contentHTML:
        `<p class="mx-auto">
        Tem certeza que deseja deletar <strong>TODAS</strong> as tarefas no quadro <strong>${board.name}</strong>?
      </p>`,
      confirmBtnColor: 'red',
      confirmBtnText: 'Excluir'
    };

    const onConfirm = () => {
      const tasks = [...board.tasks];
      tasks.forEach(task => {
        task.disabled = true;
      });

      this.taskService.updateTasks(tasks)
      this.updateBoards();
    };

    this.defaultDialogService.openDialog(dialog, onConfirm);
  }

  updateBoards() {
    this.boardsService.updateBoards('boardManager');
  }

  updateBoardTasks() {
    this.boardsService.updateBoardsTask();
  }

  openNewTask(): void {
    this.dialog.open(AddTaskComponent);
  }

  openNewBoard(): void {
    this.dialog.open(AddBoardComponent);
  }

  openEditBoard(boardId: string) {
    EditBoardComponent.id = boardId;
    this.dialog.open(EditBoardComponent);
  }

  deleteBoard(board: Board) {
    const dialog: DefaultDialog = {
      title: 'Deletar Quadro',
      contentHTML:
        `<p class="mx-auto">
        Tem certeza que deseja deletar o quadro <strong>${board.name}</strong> e todas as tarefas nele?
      </p>`,
      confirmBtnColor: 'red',
      confirmBtnText: 'Excluir'
    };

    const onConfirm = () => {
      board.disabled = true;
      this.boardsService.editBoard(board, board.id ?? '')
    };

    this.defaultDialogService.openDialog(dialog, onConfirm);
  }

  isFlexRow(elementRef: HTMLElement) {
    const element = elementRef;
    const computedStyle = window.getComputedStyle(element);
    const flexDirection = computedStyle.getPropertyValue('flex-direction');

    return flexDirection !== 'column';
  }

}
