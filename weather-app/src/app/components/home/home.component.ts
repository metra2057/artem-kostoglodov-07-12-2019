import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainApiService } from '../../../app/services/main-api.service';
import { environment } from '../../../environments/environment';
import { ICity } from '../../../app/interfaces/city-interface';
import { AppLoadStateService } from 'src/app/services/app-load-state.service';
import { WeatherDataStateService } from 'src/app/services/weather-data-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private defaultCityName = environment.defaultSearchVal;

  constructor(
    private mainApiService: MainApiService, 
    private apploadStateService: AppLoadStateService,
    private weatherDataStateService: WeatherDataStateService,
  ) { }

  ngOnInit() {
    this.initData();
  }

  onSearch(cData: ICity) {
    // GET Daily 5 days forecast.
    this.getWeatherData(cData.Key).then(res => {
      this.weatherDataStateService.reduceCityData(cData);
      this.weatherDataStateService.reduceWeatherData(res);
    });
  }

  private async initData() {
    const defaultCity = await this.getCity(this.defaultCityName);
    const weatherData = await this.getWeatherData(defaultCity[0].Key);

    this.weatherDataStateService.reduceCityData(defaultCity);
    this.weatherDataStateService.reduceWeatherData(weatherData);
    this.apploadStateService.updateLoadState(true);
  }

  private getCity(name: string) {
    return this.mainApiService.getCities(name)
      .then((res: ICity[]) => res);
  }

  private getWeatherData(locationKey: string) {
    return this.mainApiService.getFullWeatherByLocationKey(locationKey)
      .then(res => res);
  }
} 
