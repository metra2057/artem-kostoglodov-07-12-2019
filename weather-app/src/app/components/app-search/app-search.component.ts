import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ICity} from '../../shared/interfaces/city.interface';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit {
  @Input() list: ICity[] = [];
  @Output() emitItemClick = new EventEmitter<ICity>();
  @Output() emitInputValueUpdate: EventEmitter<string> = new EventEmitter<string>();

  public inputVal = '';

  constructor() {
  }

  ngOnInit() {
  }

  public handleItemClick(event: ICity) {
    this.emitItemClick.emit(event);
  }

  public onModelChange() {
    this.emitInputValueUpdate.emit(this.inputVal);
  }
}
