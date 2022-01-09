import { TestBed } from '@angular/core/testing';

import { ShowewsService } from './showews.service';

describe('ShowewsService', () => {
  let service: ShowewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
