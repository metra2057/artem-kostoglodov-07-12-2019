import {ICity} from '../../interfaces/city.interface';
import {
  CityDataActions,
  GET_CITY_DATA,
  GET_CITY_DATA_SUCCESS,
  GET_CITY_WEATHER_DATA,
  GET_CITY_WEATHER_DATA_SUCCESS
} from '../actions/city.actions';
import {MCity} from '../../models/city.model';
import {MWeatherData} from '../../models/weather-data.model';
import {IDay, ITemperature, IWeatherData} from '../../interfaces/weather-data.interface';

export const citiesKey = 'city';

export interface ICitiesState {
  cityData: ICity;
  weatherData: any;
}

const initialState: ICitiesState = {
  cityData: new MCity(
    0,
    '',
    '',
    0,
    '',
    {
      ID: '',
      LocalizedName: '',
    },
    {
      ID: '',
      LocalizedName: ''
    }
  ),
  weatherData: {}
}

export const citiesReducer = (state = initialState, action: CityDataActions) => {
  switch (action.type) {
    case GET_CITY_DATA:
      return {
        ...state,
      };
    case GET_CITY_DATA_SUCCESS:
      return {
        ...state,
        cityData: action.payload[0]
      };
    case GET_CITY_WEATHER_DATA:
      return {
        ...state,
      };
    case GET_CITY_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        weatherData: action.payload
      };
    default:
      return state;
  }
}
