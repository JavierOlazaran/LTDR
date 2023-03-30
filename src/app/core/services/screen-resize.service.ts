import {Injectable} from '@angular/core';
import {BehaviorSubject, fromEvent} from 'rxjs';

export interface ScreenInnerSize {
  innerWidth: number;
  innerHeight: number;
}

@Injectable({
  providedIn: 'root'
})
export class ScreenResizeService {

  initialInnerSize: ScreenInnerSize = {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  };

  screenSizeSubject$ = new BehaviorSubject<ScreenInnerSize>(this.initialInnerSize);

  constructor() {
    fromEvent(window, 'resize').subscribe(
      () => this.setScreenSize({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth
      })
    );
  }

  listenToScreenResize(): BehaviorSubject<ScreenInnerSize> {
    return this.screenSizeSubject$;
  }

  setScreenSize(screenSize: ScreenInnerSize): void {
    this.screenSizeSubject$.next(screenSize);
  }
}
