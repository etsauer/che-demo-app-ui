import { TestBed } from '@angular/core/testing';

import { RandomThoughtsService } from './random-thoughts.service';

describe('RandomThoughtsService', () => {
  let service: RandomThoughtsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomThoughtsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
