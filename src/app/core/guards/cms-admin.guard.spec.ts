import { TestBed } from '@angular/core/testing';

import { CmsAdminGuard } from './cms-admin.guard';

describe('CmsAdminGuard', () => {
  let guard: CmsAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CmsAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
