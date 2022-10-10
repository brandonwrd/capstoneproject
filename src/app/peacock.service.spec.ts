import { TestBed } from '@angular/core/testing';

import { PeacockService } from './peacock.service';

describe('PeacockService', () => {
  let service: PeacockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeacockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
