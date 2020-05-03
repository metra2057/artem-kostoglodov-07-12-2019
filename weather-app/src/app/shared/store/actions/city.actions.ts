import { createAction, props } from '@ngrx/store';
import { ICity } from '../../interfaces/city.interface';
import { IWeatherData } from '../../interfaces/weather-data.interface';
import {
  GET_CITY_DATA,
  GET_CITY_DATA_SUCCESS,
  GET_CITY_WEATHER_DATA,
  GET_CITY_WEATHER_DATA_SUCCESS
} from '../actions-types/actions-types';

export const getCityDataAction = createAction(GET_CITY_DATA, props<{ payload: { q: string } }>());
export const getCityDataSuccessAction = createAction(GET_CITY_DATA_SUCCESS, props<{ payload: ICity [] }>());
export const getCityWeatherDataAction = createAction(GET_CITY_WEATHER_DATA, props<{ payload: { name: string } }>());
export const getCityWeatherDataSuccessAction = createAction(GET_CITY_WEATHER_DATA_SUCCESS, props<{ payload: IWeatherData }>());
