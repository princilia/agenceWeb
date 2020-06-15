import { TestBed } from '@angular/core/testing';

import { PaquetsService } from './paquets.service';

describe('PaquetsService', () => {
  let service: PaquetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaquetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
