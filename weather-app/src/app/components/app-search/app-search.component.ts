import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICity } from '../../../app/interfaces/city-interface';
import { MainApiService } from '../../../app/services/main-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit {
  @Output() emitItemClick = new EventEmitter<ICity>();
  searchResult: ICity[] = [];

  constructor(private mainApiService: MainApiService) { }

  ngOnInit() {
  }

  handleItemClick(event: ICity) {
    this.emitItemClick.emit(event);
    this.searchResult = [];
  }

  onKeyPress(event) {
    const value = event.target.value;
    if (!value.length) {
      return this.searchResult = [];
    }

    this.mainApiService.getCities(value).then(res => this.searchResult = res);

  }
}
