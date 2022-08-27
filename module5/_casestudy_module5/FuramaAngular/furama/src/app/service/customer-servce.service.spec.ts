import { TestBed } from '@angular/core/testing';

import { CustomerServceService } from './customer-servce.service';

describe('CustomerServceService', () => {
  let service: CustomerServceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerServceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
