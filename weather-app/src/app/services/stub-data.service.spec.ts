import { TestBed } from '@angular/core/testing';

import { StubDataService } from './stub-data.service';

describe('StubDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StubDataService = TestBed.get(StubDataService);
    expect(service).toBeTruthy();
  });
});
