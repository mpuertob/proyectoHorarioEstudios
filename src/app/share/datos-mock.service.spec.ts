import { TestBed } from '@angular/core/testing';

import { DatosMockService } from './datos-mock.service';

describe('DatosMockService', () => {
  let service: DatosMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
