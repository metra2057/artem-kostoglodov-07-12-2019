import {Action} from '@ngrx/store';
import {ICity} from '../../interfaces/city.interface';
import {IWeatherData} from '../../interfaces/weather-data.interface';

export const GET_CITY_DATA = 'GET_CITY_DATA';
export const GET_CITY_DATA_SUCCESS = 'GET_CITY_DATA_SUCCESS';
export const GET_CITY_WEATHER_DATA = 'GET_CITY_WEATHER_DATA';
export const GET_CITY_WEATHER_DATA_SUCCESS = 'GET_CITY_WEATHER_DATA_SUCCESS';

export class GetCityDataAction implements Action {
  readonly type = GET_CITY_DATA;

  constructor(public payload: { q: string; }) {
  }
}

export class GetCityDataActionSuccess implements Action {
  readonly type = GET_CITY_DATA_SUCCESS;

  constructor(public payload: ICity[]) {
  }
}

export class GetCityWeatherDataAction implements Action {
  readonly type = GET_CITY_WEATHER_DATA;

  constructor(public payload: { name: string; }) {
  }
}

export class GetCityWeatherDataSuccessAction implements Action {
  readonly type = GET_CITY_WEATHER_DATA_SUCCESS;

  constructor(public payload: IWeatherData) {
  }
}

export type CityDataActions = GetCityDataAction | GetCityDataActionSuccess | GetCityWeatherDataAction | GetCityWeatherDataSuccessAction;
