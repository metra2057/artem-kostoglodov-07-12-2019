import { Component, OnInit, Input } from '@angular/core';
import { MainApiService } from 'src/app/services/main-api.service';

@Component({
  selector: 'app-weather-info-full-card',
  templateUrl: './weather-info-full-card.component.html',
  styleUrls: ['./weather-info-full-card.component.scss']
})
export class WeatherInfoFullCardComponent implements OnInit {
  @Input() item: any;

  constructor(private apiService: MainApiService) { }

  ngOnInit(): void {

  }

  public getIconUrl(id: number): string {
    return this.apiService.getIcon(id);
  }

  public getWindSpeedInMetersPerSecond(kmSpeed): number {
    return Number((kmSpeed / 3.6).toFixed(1));
  }
}
