import { TestBed } from '@angular/core/testing';

import { MovieColorService } from './movie-color.service';

describe('MovieColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieColorService = TestBed.get(MovieColorService);
    expect(service).toBeTruthy();
  });
});
