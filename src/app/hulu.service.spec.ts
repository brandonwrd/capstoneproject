import { TestBed } from '@angular/core/testing';

import { HuluService } from './hulu.service';

describe('HuluService', () => {
  let service: HuluService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuluService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
