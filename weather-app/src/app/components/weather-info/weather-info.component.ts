import {Component, OnInit, Input} from '@angular/core';
import {ICity} from '../../shared/interfaces/city.interface';
import {IWeatherData, IDailyForecast} from '../../shared/interfaces/weather-data.interface';

export interface IItemClickEvent {
  item: IDailyForecast;
  id: number;
}

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {
  @Input() cityData: ICity;
  @Input() weatherData: IWeatherData;

  private readonly months = [
    'January', 'February', 
    'March', 'April', 
    'May', 'June', 
    'July', 'August', 
    'September', 'October', 
    'November', 'December'
  ];
  private itemId: number;
  public date: Date = new Date();
  public isFullInformationCardOpen: boolean;
  public dayWeatherData;
  public isFavorite: boolean;

  constructor() {
  }

  ngOnInit() {
    console.log(this.weatherData);
  }

  public getMonth() {
    const month = this.date.getMonth();
    return this.months[month];
  }

  public getYear() {
    return this.date.getFullYear();
  }

  public handleListItemCLick(event: IItemClickEvent) {
    console.log(event);
    this.isFullInformationCardOpen = this.itemId === event.id ? 
      this.isFullInformationCardOpen = !this.isFullInformationCardOpen : true;
    this.dayWeatherData = event.item;
    this.itemId = event.id;
  }

  public toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
