import { Component, OnInit, Input, OnDestroy, ɵConsole } from '@angular/core';
import { ICity } from '../../shared/interfaces/city-interface';
import { WeatherDataStateService } from '../../../app/services/weather-data-state.service';
import { Subscription } from 'rxjs';
import { MainApiService } from '../../../app/services/main-api.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit, OnDestroy {
  cityData: ICity;
  weatherData: any;

  private subscription = new Subscription();

  constructor(
    private apiService: MainApiService,
    private weatherDataStateService: WeatherDataStateService
  ) { }

  ngOnInit() {
    this.subscription.add(
      this.weatherDataStateService.cityData.subscribe((data: ICity) => {
        this.cityData = data;
        console.log('cityData', data);
      })
    );
    this.subscription.add(
      this.weatherDataStateService.weatherData.subscribe(data => {
        this.weatherData = data;
        console.log('weatherData', data);
      })
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getIcon(id: number) {
    return this.apiService.getIcon(id);
  }
}
