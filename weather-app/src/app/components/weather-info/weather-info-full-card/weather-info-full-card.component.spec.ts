import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoFullCardComponent } from './weather-info-full-card.component';

describe('WeatherInfoFullCardComponent', () => {
  let component: WeatherInfoFullCardComponent;
  let fixture: ComponentFixture<WeatherInfoFullCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInfoFullCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfoFullCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
