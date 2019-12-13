import { Component, OnInit } from '@angular/core';
import { ICity } from '../../../app/interfaces/city-interface';
import { MainApiService } from '../../../app/services/main-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit {
  searchResult: ICity[] = [];

  constructor(private mainApiService: MainApiService) { }

  ngOnInit() {
  }

  handleItemClick(event) {
    // console.log(event);
  }

  onKeyPress(event) {
    const value = event.target.value;
    if (!value.length) {
      return;
    }

    this.mainApiService.getCities(value).then(res => this.searchResult = res);
  }
}
