import {createFeatureSelector, createSelector} from '@ngrx/store';
import {citiesKey, ICitiesState} from '../reducers/cities.reducer';
import {ICity} from '../../interfaces/city.interface';
import { IWeatherData } from '../../interfaces/weather-data.interface';

export const selectCityFeature = createFeatureSelector<ICitiesState>(citiesKey);
export const selectCity = createSelector(
  selectCityFeature,
  (state: ICitiesState): ICity => state.cityData
);

export const selectCityWeatherDataFeature = createFeatureSelector<ICitiesState>(citiesKey);
export const selectCityWeatherData = createSelector(
  selectCityWeatherDataFeature,
  (state: ICitiesState): IWeatherData => state.weatherData
);
