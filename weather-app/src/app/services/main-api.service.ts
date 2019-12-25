import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ICity } from '../interfaces/city-interface';

@Injectable({
  providedIn: 'root'
})
export class MainApiService {
  constructor(private httpSerice: HttpService) { }

  getCities(name: string): Promise<ICity[]> {
    const data = {
      q: name
    }

    return this.httpSerice.get(`locations/v1/cities/autocomplete`, data);
  }

  getFullWeatherByLocationKey(locationKey: string, details: boolean = true, metric: boolean = true) {
    const data = {
      details: details,
      metric: metric
    }

    return this.httpSerice.get(`forecasts/v1/daily/5day/${locationKey}`, data);
  }

  getCurrentWeatherConditions(locationKey: string, details: boolean = true) {
    const data = {
      details: details
    }

    return this.httpSerice.get(`currentconditions/v1/${locationKey}`, data);
  }
}
