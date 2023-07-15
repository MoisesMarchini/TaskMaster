import { Component, OnInit } from '@angular/core';
import { RouteHistoryService } from '../../services/route-history.service';
import { BoardManager } from 'src/app/features/boards/board-manager';
import { TaskManager } from 'src/app/features/tasks/task-manager';
import { AppOptions } from 'src/app/core/app-options';
import { DefaultDialog, DefaultDialogService } from '../default-dialog/default-dialog.service';

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

  constructor(
    private routeHistoryService: RouteHistoryService,
    public defaultDialogService: DefaultDialogService,
  ) { }

  ngOnInit() {
    this.setDarkMode(false);
  }

  setDarkMode(change: boolean = true){
    const htmlClassList = document.documentElement.classList;
    const themeColorElement = document.getElementById('theme-color-element');

    if (change)
      this.darkMode = !this.darkMode;

    if (!this.darkMode)
      htmlClassList.remove('dark-mode');
    else
      htmlClassList.add('dark-mode');

    if (themeColorElement)
      themeColorElement.setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--bs-container-bg'));
  }

  clearBoardsData() {
    const dialog: DefaultDialog = {
      title: 'Deletar Quadros',
      contentHTML:
        `<p class="mx-auto">
        Tem certeza que deseja deletar <strong>TODOS</strong> os quadros e as tarefas neles?
      </p>`,
      confirmBtnColor: 'red',
      confirmBtnText: 'Excluir'
    };

    const onConfirm = () => {
      BoardManager.clearData();
      TaskManager.clearData();
      window.location.reload();
    };

    this.defaultDialogService.openDialog(dialog, onConfirm);
  }

  clearTasksData() {
    const dialog: DefaultDialog = {
      title: 'Deletar Tarefas',
      contentHTML:
        `<p class="mx-auto">
        Tem certeza que deseja deletar <strong>TODAS</strong> as tarefas?
      </p>`,
      confirmBtnColor: 'red',
      confirmBtnText: 'Excluir'
    };

    const onConfirm = () => {
      TaskManager.clearData();
      window.location.reload();
    };

    this.defaultDialogService.openDialog(dialog, onConfirm);
  }
}
