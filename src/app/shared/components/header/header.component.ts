import { Component, OnInit } from '@angular/core';
import { TaskManager } from 'src/app/features/tasks/task-manager';
import { RouteHistoryService } from '../../services/route-history.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  getRouteTitle = () => this.routeHistoryService.getRouteTitle();
  navigateBack = () => this.routeHistoryService.navigateBack();
  isRootRoute = () => this.routeHistoryService.isRootRoute();

  constructor(private routeHistoryService: RouteHistoryService) { }

  ngOnInit() {

  }
}
