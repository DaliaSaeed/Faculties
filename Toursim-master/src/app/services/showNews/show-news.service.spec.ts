import { TestBed } from '@angular/core/testing';

import { ShowNewsService } from './show-news.service';

describe('ShowNewsService', () => {
  let service: ShowNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
