import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MainApiService {
  constructor(private httpService: HttpService) { }

  public getCities(data: any) {
    return this.httpService.get(`locations/v1/cities/autocomplete`, data);
  }

  public getFullWeatherByLocationKey(locationKey: {name: string}, details: boolean = true, metric: boolean = true) {
    const data = {
      details,
      metric
    }

    return this.httpService.get(`forecasts/v1/daily/5day/${locationKey.name}`, data);
  }

  public getCurrentWeatherConditions(locationKey: string, details: boolean = true) {
    const data = {
      details
    }

    return this.httpService.get(`currentconditions/v1/${locationKey}`, data);
  }

  public getIcon(id: number) {
    const iconId = id < 10 ? '0' + id.toString() : id.toString();

    return `https://uds-static.api.aero/weather/icon/sm/${iconId}.png`;
  }
}
