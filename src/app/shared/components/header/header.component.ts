import { Component, OnInit } from '@angular/core';
import { RouteHistoryService } from '../../services/route-history.service';
import { BoardManager } from 'src/app/features/boards/board-manager';
import { TaskManager } from 'src/app/features/tasks/task-manager';
import { AppOptions } from 'src/app/core/app-options';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  getRouteTitle = () => this.routeHistoryService.getRouteTitle();
  navigateBack = () => this.routeHistoryService.navigateBack();
  isRootRoute = () => this.routeHistoryService.isRootRoute();
  get darkMode() { return AppOptions.darkMode };
  set darkMode(value) { AppOptions.darkMode = value };

  constructor(private routeHistoryService: RouteHistoryService) { }

  ngOnInit() {
    this.setDarkMode(false);
  }

  setDarkMode(change: boolean = true){
    const htmlClassList = document.documentElement.classList;

    if (change)
      this.darkMode = !this.darkMode;

    if (!this.darkMode)
      htmlClassList.remove('dark-mode');
    else
      htmlClassList.add('dark-mode');
  }

  clearBoardsData() {
    BoardManager.clearData();
    window.location.reload();
  }

  clearTasksData() {
    TaskManager.clearData();
    window.location.reload();
  }

  clearAllData() {
    BoardManager.clearData();
    TaskManager.clearData();
    AppOptions.clearData();
    window.location.reload();
  }
}
