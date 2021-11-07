import { TestBed } from '@angular/core/testing';

import { HeroserviceService } from './heroservice.service';

describe('HeroserviceService', () => {
  let service: HeroserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
