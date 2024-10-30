import { TestBed } from '@angular/core/testing';

import { WillServiceService } from './will-service.service';

describe('WillServiceService', () => {
  let service: WillServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WillServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
