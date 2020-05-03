import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MainApiService } from '../../../app/services/main-api.service';
import { environment } from '../../../environments/environment';
import { ICity } from '../../shared/interfaces/city.interface';
import { AppLoadStateService } from 'src/app/services/app-load-state.service';
import { WeatherDataStateService } from 'src/app/services/weather-data-state.service';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { selectCity, selectCityWeatherData } from '../../shared/store/selectors/cities.selectors';
import { selectSearch } from '../../shared/store/selectors/search.selectors';
import { StubDataService } from 'src/app/services/stub-data.service';
import { selectFavoriteList } from '../../shared/store/selectors/favorites.selectors';
import { IFavoriteCity } from '../../shared/interfaces/favorite-city.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { setActionParams } from '../../shared/store';
import {
  GET_SEARCH_DATA,
  GET_CITY_DATA,
  GET_FAVORITES_LIST,
  GET_CITY_WEATHER_DATA,
  ADD_ITEM_TO_FAVORITES,
  REMOVE_ITEM_FROM_FAVORITES
} from '../../shared/store/actions-types/actions-types';
import { IWeatherData } from '../../shared/interfaces/weather-data.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  private readonly defaultCityName = environment.defaultSearchVal;
  public readonly cityData$: Observable<ICity> = this.store$.pipe(select(selectCity));
  public readonly weatherData$: Observable<IWeatherData> = this.store$.pipe(select(selectCityWeatherData));
  public readonly searchList$: Observable<ICity> = this.store$.pipe(select(selectSearch));
  public readonly favoritesList$: Observable<any> = this.store$.pipe(select(selectFavoriteList));

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private mainApiService: MainApiService,
    private appLoadStateService: AppLoadStateService,
    private weatherDataStateService: WeatherDataStateService,
    private store$: Store<any>,
    private stubService: StubDataService
  ) {
  }

  ngOnInit(): void {
    let qParams = null;
    // this.cityData$ = this.stubService.getCityData();
    // this.weatherData$ = this.stubService.getWeatherData();

    this.store$.dispatch(setActionParams(GET_FAVORITES_LIST));
    this.subscription.add(
      this.activatedRoute.queryParams.pipe(
        filter(params => params && params.Key && params.LocalizedName)
      ).subscribe(params => {
        qParams = params;
        this.store$.dispatch(setActionParams(GET_CITY_DATA, {q: qParams.LocalizedName}));
        this.store$.dispatch(setActionParams(GET_CITY_WEATHER_DATA, {name: qParams.Key}));
      }));

    if (!qParams) {
      this.store$.dispatch(setActionParams(GET_CITY_DATA, {q: this.defaultCityName}));
      this.subscription.add(
        this.cityData$
          .pipe(filter(res => res && !!res.Key))
          .subscribe((res: ICity) => {
            this.store$.dispatch(setActionParams(GET_CITY_WEATHER_DATA, {name: res.Key}));
          }));
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.appLoadStateService.updateLoadState(true);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onSearchItemSelect(cData: ICity): void {
    this.store$.dispatch(setActionParams(GET_CITY_DATA, {q: cData.LocalizedName}));
    this.store$.dispatch(setActionParams(GET_CITY_WEATHER_DATA, {name: cData.Key}));

    this.router.navigate([], {
      queryParams: {LocalizedName: cData.LocalizedName, Key: cData.Key}
    });
  }

  public onSearchValueUpdate(value: string): void {
    this.store$.dispatch(setActionParams(GET_SEARCH_DATA, {q: value}));
  }

  public onAddFavoriteItem(event: IFavoriteCity []): void {
    this.store$.dispatch(setActionParams(ADD_ITEM_TO_FAVORITES, event));
  }

  public onRemoveFavoriteItem(event: IFavoriteCity []): void {
    this.store$.dispatch(setActionParams(REMOVE_ITEM_FROM_FAVORITES, event));
  }
}
