import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ICity } from 'src/app/interfaces/city-interface';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit, OnChanges {
  @Input() cityData: ICity;
  @Input() weatherData: any;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.weatherData && this.cityData) {
      console.log('cityData', this.cityData);
      console.log('weatherData', this.weatherData);
    }
  }
}
