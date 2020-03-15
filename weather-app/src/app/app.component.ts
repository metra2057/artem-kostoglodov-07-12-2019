import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppLoadStateService } from './services/app-load-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  isLoad: boolean;

  constructor(private appLoadStateService: AppLoadStateService) {
    this.subscription.add(
      this.appLoadStateService.appLoading.subscribe(state => this.isLoad = state)
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
