import { Component, OnInit } from '@angular/core';
import { MainApiService } from '../../../app/services/main-api.service';
import { environment } from '../../../environments/environment';
import { ICity } from '../../../app/interfaces/city-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private defaultCityName = environment.defaultSearchVal;
  data: ICity[] = [];

  constructor(private mainApiService: MainApiService) { }

  ngOnInit() {
    // this.initData();
  }

  private async initData() {
    const defaultCity = await this.getCity(this.defaultCityName);
    const weatherData = await this.getWeatherData(defaultCity[0].Key);
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
