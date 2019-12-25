import { Component, OnInit } from '@angular/core';
import { MainApiService } from '../../../app/services/main-api.service';
import { environment } from '../../../environments/environment';
import { ICity } from '../../../app/interfaces/city-interface';
import { AppLoadStateService } from 'src/app/services/app-load-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private defaultCityName = environment.defaultSearchVal;
  data: ICity[] = [];
  weatherData: any;
  cityData: ICity;

  constructor(private mainApiService: MainApiService, private apploadStateService: AppLoadStateService) { }

  ngOnInit() {
    this.initData();
  }

  onSearch(event: ICity) {
    // GET Daily 5 days forecast.
    this.getWeatherData(event.Key).then(res => {
      this.cityData = event;
      this.weatherData = res;
    });
  }

  private async initData() {
    const defaultCity = await this.getCity(this.defaultCityName);
    const weatherData = await this.getWeatherData(defaultCity[0].Key);

    this.weatherData = weatherData;
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
