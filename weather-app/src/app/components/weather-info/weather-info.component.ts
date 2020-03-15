import {Component, OnInit, Input} from '@angular/core';
import {MainApiService} from '../../../app/services/main-api.service';
import {ICity} from '../../shared/interfaces/city.interface';
import {IWeatherData} from '../../shared/interfaces/weather-data.interface';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {
  @Input() cityData: ICity;
  @Input() weatherData: IWeatherData;

  constructor(
    private apiService: MainApiService,
  ) {
  }

  ngOnInit() {
  }

  getIcon(id: number) {
    return this.apiService.getIcon(id);
  }
}
