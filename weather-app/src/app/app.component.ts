import { Component, OnInit } from '@angular/core';
import { AppLoadStateService } from './services/app-load-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private subscribtion = new Subscription();
  isLoad: boolean;

  constructor(private apploadStateService: AppLoadStateService) {
    this.subscribtion.add(
      this.apploadStateService.appLoading.subscribe(state => this.isLoad = state)
    );
  }
  
  ngOnInit() {;
  }

  ngOnDestroy() {
    if (this.subscribtion) {
      this.subscribtion.unsubscribe();
    }
  }
}
