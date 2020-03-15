import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICity } from '../../shared/interfaces/city.interface';
import { MainApiService } from '../../../app/services/main-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit {
  @Output() emitItemClick = new EventEmitter<ICity>();

  inputVal: string = '';
  searchResult: ICity[] = [];

  constructor(
    private mainApiService: MainApiService,
  ) { }

  ngOnInit() {
  }

  handleItemClick(event: ICity) {
    this.emitItemClick.emit(event);
    this.searchResult = [];
  }

  onKeyPress() {
    if (!this.inputVal || !this.inputVal.length) {
      return this.searchResult = [];
    }

    this.mainApiService.getCities({q: this.inputVal }).subscribe((res: ICity[]) => {
      if (res) {
        this.searchResult = res;
      }
    });
  }
}
