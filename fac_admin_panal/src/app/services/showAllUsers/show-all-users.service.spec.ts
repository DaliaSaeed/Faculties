import { TestBed } from '@angular/core/testing';

import { ShowAllUsersService } from './show-all-users.service';

describe('ShowAllUsersService', () => {
  let service: ShowAllUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowAllUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
