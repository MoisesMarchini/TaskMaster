import { Component, OnInit } from '@angular/core';
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

  setDarkMode(){
    const htmlClassList = document.documentElement.classList;

    if (htmlClassList.contains('dark-mode'))
      htmlClassList.remove('dark-mode');
    else
      htmlClassList.add('dark-mode');
  }
}
