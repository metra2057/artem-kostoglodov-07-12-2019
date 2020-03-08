import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataStateService {
  private weatherData$ = new BehaviorSubject({});
  weatherData = this.weatherData$.asObservable();

  private cityData$ = new BehaviorSubject({});
  cityData = this.cityData$.asObservable();

  constructor() { }

  reduceWeatherData(data) {
    if (!data) {
      return;
    }

    return this.weatherData$.next(data);
  }

  reduceCityData(data) {
    if (!data) {
      return;
    }

    return this.cityData$.next(data);
  }
}
