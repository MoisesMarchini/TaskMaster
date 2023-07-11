import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivationEnd, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteHistoryService {
  private static routeHistory: string[] = [];
  private static currentRoute: string = '';
  private static currentRouteConfig: Route | null = null;
  private static routeParams: { key: string, value: string }[] = [];

  constructor(private router: Router) {
    if (RouteHistoryService.routeHistory.length > 0)
      return;

    this.router.events.subscribe(event => {
      if (event instanceof ActivationEnd) {
        const snapshot = event.snapshot;
        const params = snapshot.params;
        const paramsKeys = Object.getOwnPropertyNames(params);
        const paramsValues = paramsKeys.map(key => {
          return { key: key, value: params[key]}
        });
        RouteHistoryService.routeParams = paramsValues;
        RouteHistoryService.currentRouteConfig = snapshot.routeConfig;
      }
      if (event instanceof NavigationEnd) {
        const routeUrl = this.router.url;
        RouteHistoryService.currentRoute = routeUrl.slice(1);
        RouteHistoryService.routeHistory.push(routeUrl);
      }
    });
  }

  getRouteParams() {
    return RouteHistoryService.routeParams;
  }

  navigateBack(): void {
    RouteHistoryService.routeHistory.pop();
    const previousRoute = RouteHistoryService.routeHistory.pop();

    this.router.navigateByUrl(previousRoute ?? '/');
  }

  getRouteTitle(): string {
    const currentRouteConfig = RouteHistoryService.currentRouteConfig;
    if (currentRouteConfig && currentRouteConfig.data && currentRouteConfig.data['title']) {
      return currentRouteConfig.data['title'];
    }
    return 'TaskMaster';
  }

  isRootRoute(): boolean {
    const currentRouteConfig = RouteHistoryService.currentRouteConfig;
    return (currentRouteConfig && currentRouteConfig.data && currentRouteConfig?.data['root'] === true)?? false;
  }
}
