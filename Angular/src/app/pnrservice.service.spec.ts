import { TestBed } from '@angular/core/testing';

import { PNRserviceService } from './pnrservice.service';

describe('PNRserviceService', () => {
  let service: PNRserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PNRserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
