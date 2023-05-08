import { TestBed } from '@angular/core/testing';

import { AnteproyectoserviceService } from './anteproyectoservice.service';

describe('AnteproyectoserviceService', () => {
  let service: AnteproyectoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnteproyectoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
