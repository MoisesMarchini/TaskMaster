import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { BoardManager } from '../../board-manager'
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddTaskComponent } from 'src/app/features/tasks/components/add-task/add-task.component';
import { BoardsService } from '../../services/boards.service';
import { AppOptions } from 'src/app/core/app-options';
import { LoaderService } from '../../../../shared/components/loader/loader.service';
import { AddBoardComponent } from '../add-board/add-board.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  get boards() {
    return this.boardsService.getBoards();
  }

  constructor(
    private boardsService: BoardsService,
    private _bottomSheet: MatBottomSheet,
    public loaderService: LoaderService,
    private renderer: Renderer2,
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

  changeTaskBoard() {
    this.updateBoards();
  }

  updateBoardsAfterChange() {
    this.boardsService.updateBoards('boardService');
  }

  updateBoards() {
    this.boardsService.updateBoards('boardManager');
  }

  updateBoardTasks() {
    this.boardsService.updateBoardsTask();
  }

  openNewTask(): void {
    this._bottomSheet.open(AddTaskComponent);
  }

  openNewBoard(): void {
    this._bottomSheet.open(AddBoardComponent);
  }

  isFlexRow(elementRef: HTMLElement) {
    const element = elementRef;
    const computedStyle = window.getComputedStyle(element);
    const flexDirection = computedStyle.getPropertyValue('flex-direction');

    return flexDirection !== 'column';
  }

}
