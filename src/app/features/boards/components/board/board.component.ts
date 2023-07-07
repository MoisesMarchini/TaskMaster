import { Component, OnInit } from '@angular/core';
import { BoardManager } from '../../board-manager'
import { Router } from '@angular/router';
import { TaskManager } from 'src/app/features/tasks/task-manager';
import { BoardViewModel } from '../../models/board';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskService } from 'src/app/features/tasks/services/task.service';
import { Task } from 'src/app/features/tasks/models/task';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddTaskComponent } from 'src/app/features/tasks/components/add-task/add-task.component';
import { BoardsService } from '../../services/boards.service';

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
    private _bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
    this.updateBoards();
  }

  drop(event: CdkDragDrop<any[]>) {
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

}
