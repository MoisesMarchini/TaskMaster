import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteHistoryService {
  private routeHistory: string[] = [];
  private currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const routeUrl = this.router.url;
        this.currentRoute = routeUrl.slice(1);
        this.routeHistory.push(routeUrl);
      }
    });
  }

  navigateBack(): void {
    this.routeHistory.pop();
    const previousRoute = this.routeHistory.pop();

    this.router.navigateByUrl(previousRoute ?? '/');
    console.log(previousRoute, this.routeHistory)
  }

  getRouteTitle(): string {
    const currentRouteConfig = this.router.config.find(route => route.path === this.currentRoute);
    if (currentRouteConfig && currentRouteConfig.data && currentRouteConfig.data['title']) {
      return currentRouteConfig.data['title'];
    }
    return 'TaskMaster';
  }

  isRootRoute(): boolean {
    return this.currentRoute === ''
  }
}
