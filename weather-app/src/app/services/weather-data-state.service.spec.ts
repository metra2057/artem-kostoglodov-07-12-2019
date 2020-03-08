import { TestBed } from '@angular/core/testing';

import { WeatherDataStateService } from './weather-data-state.service';

describe('WeatherDataStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherDataStateService = TestBed.get(WeatherDataStateService);
    expect(service).toBeTruthy();
  });
});
