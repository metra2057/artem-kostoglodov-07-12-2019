import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {MainApiService} from '../../../app/services/main-api.service';
import {environment} from '../../../environments/environment';
import {ICity} from '../../shared/interfaces/city.interface';
import {AppLoadStateService} from 'src/app/services/app-load-state.service';
import {WeatherDataStateService} from 'src/app/services/weather-data-state.service';
import {ICitiesState} from '../../shared/store/reducers/cities.reducer';
import {select, Store} from '@ngrx/store';
import {GetCityDataAction, GetCityWeatherDataAction} from '../../shared/store/actions/city.actions';
import {Observable, Subscription} from 'rxjs';
import {selectCity, selectCityWeatherData} from '../../shared/store/selectors/cities.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private defaultCityName = environment.defaultSearchVal;
  private subscription: Subscription = new Subscription();
  public cityData$: Observable<ICity> = this.store$.pipe(select(selectCity));
  public weatherData$: Observable<ICity> = this.store$.pipe(select(selectCityWeatherData));

  constructor(
    private mainApiService: MainApiService,
    private appLoadStateService: AppLoadStateService,
    private weatherDataStateService: WeatherDataStateService,
    private store$: Store<ICitiesState>
  ) {
  }

  ngOnInit() {
    this.store$.dispatch(new GetCityDataAction({q: this.defaultCityName}));
    this.subscription.add(
      this.cityData$.subscribe((res: ICity) => {
        if (res && res.Key) {
          this.store$.dispatch(new GetCityWeatherDataAction({name: res.Key}));
        }
      })
    );
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.appLoadStateService.updateLoadState(true);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onSearch(cData: ICity) {
    this.store$.dispatch(new GetCityWeatherDataAction({name: cData.Key}));
  }
}
