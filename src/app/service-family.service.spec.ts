import { TestBed } from '@angular/core/testing';

import { ServiceFamilyService } from './service-family.service';

describe('ServiceFamilyService', () => {
  let service: ServiceFamilyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFamilyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
