import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private show = false;

  constructor() { }

  hideLoader(timeOut?: number) {
    setTimeout(() => {
      this.show = false;
    }, timeOut);
  }

  showLoader() {
    this.show = true;
  }

  isShow() {
    return this.show;
  }

}
