import { TestBed } from '@angular/core/testing';

import { HboService } from './hbo.service';

describe('HboService', () => {
  let service: HboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
