import { TestBed } from '@angular/core/testing';

import { SuperAdminGuardsGuard } from './super-admin-guards.guard';

describe('SuperAdminGuardsGuard', () => {
  let guard: SuperAdminGuardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SuperAdminGuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
