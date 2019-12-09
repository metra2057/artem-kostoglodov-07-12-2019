import { TestBed } from '@angular/core/testing';

import { AppLoadStateService } from './app-load-state.service';

describe('AppLoadStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppLoadStateService = TestBed.get(AppLoadStateService);
    expect(service).toBeTruthy();
  });
});
