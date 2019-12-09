import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppLoadStateService {
  private loadState = new BehaviorSubject(false);
  appLoading = this.loadState.asObservable();

  constructor() { }

  updateLoadState(state: boolean) {
    this.loadState.next(state);
  }
}
