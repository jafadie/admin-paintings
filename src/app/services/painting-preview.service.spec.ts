import { TestBed } from '@angular/core/testing';

import { PaintingPreviewService } from './painting-preview.service';

describe('PaintingPreviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaintingPreviewService = TestBed.get(PaintingPreviewService);
    expect(service).toBeTruthy();
  });
});
