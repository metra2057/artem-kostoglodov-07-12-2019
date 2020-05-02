import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ICity } from '../../shared/interfaces/city.interface';
import { IWeatherData, IDailyForecast } from '../../shared/interfaces/weather-data.interface';
import { IFavoriteCity } from '../../shared/interfaces/favorite-city.interface';
import { getMonths } from '../../util';

export interface IItemClickEvent {
  item: IDailyForecast;
  id: number;
}

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit, OnChanges {
  @Input() cityData: ICity;
  @Input() weatherData: IWeatherData;
  @Input() favoritesList: IFavoriteCity [] = [];
  @Output() emitAddFavoritesItem: EventEmitter<IFavoriteCity []> = new EventEmitter<IFavoriteCity []>();
  @Output() emitRemoveFavoritesItem: EventEmitter<IFavoriteCity []> = new EventEmitter<IFavoriteCity []>();

  private itemId: number;
  private favorites: IFavoriteCity [] = [];
  public isFullInformationCardOpen: boolean;
  public dayWeatherData;
  public isFavorite: boolean;

  constructor() {
  }

  ngOnInit(): void {
    const isValid = this.checkFavoritesFormat(this.favoritesList);
    if (isValid) {
      this.favorites = this.favoritesList;
      this.isFavorite = !!this.favorites.find((item: any) => item.Key === this.cityData.Key);
    }
  }

  ngOnChanges(event): void {
    if (event.cityData) {
      this.favorites = this.favoritesList;
      this.isFavorite = !!this.favorites.find((item: any) => item.Key === this.cityData.Key);
    }
  }

  public getMonth(): string {
    const month = new Date().getMonth();
    return getMonths()[month];
  }

  public getYear(): number {
    return new Date().getFullYear();
  }

  public handleListItemCLick(event: IItemClickEvent): void {
    this.isFullInformationCardOpen = this.itemId === event.id ?
      this.isFullInformationCardOpen = !this.isFullInformationCardOpen : true;
    this.dayWeatherData = event.item;
    this.itemId = event.id;
  }

  public toggleFavorite(cityData: ICity): void {
    this.isFavorite = !this.isFavorite;
    this.isFavorite ? this.addToFavorite(cityData) : this.removeItemFromFavorites(cityData);
  }

  private addToFavorite(cityData: IFavoriteCity): void {
    const {LocalizedName, Key} = cityData;
    const favorite = {LocalizedName, Key};
    const list: IFavoriteCity[] = Object.assign([], this.favoritesList);
    const isValid = this.checkFavoritesFormat(list);
    const hub: IFavoriteCity[] = [];

    isValid ? list.push(favorite) : hub.push(favorite);

    this.emitAddFavoritesItem.emit(isValid ? list : hub);
  }

  private removeItemFromFavorites(cityData: IFavoriteCity): void {
    const {LocalizedName, Key} = cityData;
    const favorites = Object.assign([], this.favoritesList);
    const updated = favorites.filter((item: IFavoriteCity) => item.LocalizedName !== LocalizedName && item.Key !== Key);

    this.emitAddFavoritesItem.emit(updated);
  }

  private checkFavoritesFormat(favorites): boolean {
    return favorites && favorites instanceof Array;
  }
}
