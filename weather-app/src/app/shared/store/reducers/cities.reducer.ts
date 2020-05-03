import { createReducer, on } from '@ngrx/store';
import * as CityActions from '../actions/city.actions';
import { IWeatherData } from '../../interfaces/weather-data.interface';
import { ICity } from '../../interfaces/city.interface';

export const citiesKey = 'city';

export interface ICitiesState {
  cityData: ICity | null;
  weatherData: IWeatherData | null;
}

const initialState: ICitiesState = {
  cityData: null,
  weatherData: null
}

export const citiesReducer = createReducer(
  initialState,
  on(CityActions.getCityDataAction, state =>
    ({...state})),
  on(CityActions.getCityDataSuccessAction, (state, {payload}) =>
    ({...state, cityData: payload[0]})),
  on(CityActions.getCityWeatherDataAction, state =>
    ({...state})),
  on(CityActions.getCityWeatherDataSuccessAction, (state, {payload}) =>
    ({...state, weatherData: payload})),
);
