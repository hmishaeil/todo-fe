import { TestBed } from '@angular/core/testing';

import { EditUserResolver } from './edit-user.resolver';

describe('EditUserResolver', () => {
  let resolver: EditUserResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EditUserResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
