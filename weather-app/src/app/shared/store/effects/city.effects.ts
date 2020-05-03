import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { MainApiService } from '../../../services/main-api.service';
import {
  GET_CITY_DATA,
  GET_CITY_DATA_SUCCESS,
  GET_CITY_WEATHER_DATA,
  GET_CITY_WEATHER_DATA_SUCCESS
} from '../actions-types/actions-types';
import { setActionParams } from '../index';
import { ICity } from '../../interfaces/city.interface';
import { IWeatherData } from '../../interfaces/weather-data.interface';

@Injectable()
export class CityEffects {
  constructor(
    private mainApiService: MainApiService,
    private actions$: Actions
  ) {
  }

  public getCityData$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(GET_CITY_DATA),
    mergeMap((action: { payload: { q: string } }) =>
      this.mainApiService.getCities(action.payload).pipe(
        map((payload: ICity) => setActionParams(GET_CITY_DATA_SUCCESS, payload))
      ))));

  public getCityWeatherData$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(GET_CITY_WEATHER_DATA),
    mergeMap((action: { payload: { name: string } }) =>
      this.mainApiService.getFullWeatherByLocationKey(action.payload).pipe(
        map((payload: IWeatherData) => setActionParams(GET_CITY_WEATHER_DATA_SUCCESS, payload))
      ))));
}
