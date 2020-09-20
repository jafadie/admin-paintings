import { TestBed } from '@angular/core/testing';

import { SeriePreviewService } from './serie-preview.service';

describe('SeriePreviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeriePreviewService = TestBed.get(SeriePreviewService);
    expect(service).toBeTruthy();
  });
});
