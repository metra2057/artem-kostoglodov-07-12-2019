import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {MainApiService} from '../../../services/main-api.service';
import {
  GET_CITY_DATA,
  GET_CITY_DATA_SUCCESS,
  GET_CITY_WEATHER_DATA,
  GET_CITY_WEATHER_DATA_SUCCESS,
  GetCityDataAction,
  GetCityWeatherDataAction
} from '../actions/city.actions';

@Injectable()
export class CityEffects {
  constructor(
    private mainApiService: MainApiService,
    private actions$: Actions
  ) {
  }

  @Effect() getCityData$: Observable<Action> = this.actions$.pipe(
    ofType(GET_CITY_DATA),
    mergeMap((action: GetCityDataAction) => this.mainApiService.getCities(action.payload).pipe(
      map(payload => ({type: GET_CITY_DATA_SUCCESS, payload}))
    ))
  );

  @Effect() getCityWeatherData$: Observable<Action> = this.actions$.pipe(
    ofType(GET_CITY_WEATHER_DATA),
    mergeMap((action: GetCityWeatherDataAction) => this.mainApiService.getFullWeatherByLocationKey(action.payload).pipe(
      map(payload => ({type: GET_CITY_WEATHER_DATA_SUCCESS, payload}))
    ))
  );
}
