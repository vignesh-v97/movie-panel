import { TestBed } from '@angular/core/testing';

import { SeriesCreditsService } from './series-credits.service';

describe('SeriesCreditsService', () => {
  let service: SeriesCreditsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesCreditsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
