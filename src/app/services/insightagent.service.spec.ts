import { TestBed } from '@angular/core/testing';

import { InsightagentService } from './insightagent.service';

describe('InsightagentService', () => {
  let service: InsightagentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsightagentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
