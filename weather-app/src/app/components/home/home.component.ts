import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MainApiService } from '../../../app/services/main-api.service';
import { environment } from '../../../environments/environment';
import { ICity } from '../../shared/interfaces/city.interface';
import { AppLoadStateService } from 'src/app/services/app-load-state.service';
import { WeatherDataStateService } from 'src/app/services/weather-data-state.service';
import { ICitiesState } from '../../shared/store/reducers/cities.reducer';
import { select, Store } from '@ngrx/store';
import { GetCityDataAction, GetCityWeatherDataAction } from '../../shared/store/actions/city.actions';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { selectCity, selectCityWeatherData } from '../../shared/store/selectors/cities.selectors';
import { selectSearch } from '../../shared/store/selectors/search.selectors';
import { GetSearchDataAction } from '../../shared/store/actions/search.actions';
import { ISearchState } from '../../shared/store/reducers/search.reducer';
import { StubDataService } from 'src/app/services/stub-data.service';
import { selectFavoriteList } from '../../shared/store/selectors/favorites.selectors';
import {
  AddFavoritesItemAction,
  GetFavoritesListAction,
  RemoveFavoritesItemAction
} from '../../shared/store/actions/favorites.actions';
import { IFavoriteCity } from '../../shared/interfaces/favorite-city.interface';
import { ActivatedRoute, Router } from '@angular/router';

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
  public searchList$: Observable<ICity> = this.store$.pipe(select(selectSearch));
  public favoritesList$: Observable<any> = this.store$.pipe(select(selectFavoriteList));

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private mainApiService: MainApiService,
    private appLoadStateService: AppLoadStateService,
    private weatherDataStateService: WeatherDataStateService,
    private store$: Store<ICitiesState | ISearchState>,
    private stubService: StubDataService
  ) {
  }

  ngOnInit(): void {
    let qParams = null;
    // this.cityData$ = this.stubService.getCityData();
    // this.weatherData$ = this.stubService.getWeatherData();

    this.subscription.add(
      this.activatedRoute.queryParams.pipe(
        filter(params => params && params.Key && params.LocalizedName)
      ).subscribe(params => {
        qParams = params;
        this.store$.dispatch(new GetCityDataAction({q: qParams.LocalizedName}));
        this.store$.dispatch(new GetCityWeatherDataAction({name: qParams.Key}));
      }));

    if (!qParams) {
      this.store$.dispatch(new GetFavoritesListAction());
      this.store$.dispatch(new GetCityDataAction({q: this.defaultCityName}));
      this.subscription.add(
        this.cityData$
          .pipe(filter(res => res && !!res.Key))
          .subscribe((res: ICity) => {
            this.store$.dispatch(new GetCityWeatherDataAction({name: res.Key}));
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
    this.store$.dispatch(new GetCityDataAction({q: cData.LocalizedName}));
    this.store$.dispatch(new GetCityWeatherDataAction({name: cData.Key}));
    this.router.navigate([], {queryParams: {LocalizedName: cData.LocalizedName, Key: cData.Key }});
  }

  public onSearchValueUpdate(value: string): void {
    this.store$.dispatch(new GetSearchDataAction({q: value}));
  }

  public onAddFavoriteItem(event: IFavoriteCity []): void {
    this.store$.dispatch(new AddFavoritesItemAction(event));
  }

  public onRemoveFavoriteItem(event: IFavoriteCity []): void {
    this.store$.dispatch(new RemoveFavoritesItemAction(event));
  }
}
