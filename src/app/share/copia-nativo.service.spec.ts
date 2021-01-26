import { TestBed } from '@angular/core/testing';

import { CopiaNativoService } from './copia-nativo.service';

describe('CopiaNativoService', () => {
  let service: CopiaNativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopiaNativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
