import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MainApiService } from 'src/app/services/main-api.service';
import { IItemClickEvent } from '../weather-info.component';
import { IWeatherData, IDailyForecast } from 'src/app/shared/interfaces/weather-data.interface';


@Component({
  selector: 'app-weather-info-list',
  templateUrl: './weather-info-list.component.html',
  styleUrls: ['./weather-info-list.component.scss']
})
export class WeatherInfoListComponent implements OnInit {
  @Input() list: IWeatherData[];
  @Output() emitListItemClick: EventEmitter<IItemClickEvent> = new EventEmitter<IItemClickEvent>();

  public activeItemId = -1;
  constructor(private apiService: MainApiService) { }

  ngOnInit() {
  }

  public getIcon(id: number) {
    return this.apiService.getIcon(id);
  }

  public getAverageTemperature(item: IDailyForecast) {
    return Math.round((Math.round(item.Temperature.Minimum.Value) + Math.round(item.Temperature.Maximum.Value)) / 2);
  }

  public handleItemClick(item: IDailyForecast, id: number) {
    this.emitListItemClick.emit({ item, id });
    this.activeItemId = this.activeItemId === id ? -1 : id;
  }
}
