import { TestBed } from '@angular/core/testing';

import { EditTodoResolver } from './edit-todo.resolver';

describe('EditTodoResolver', () => {
  let resolver: EditTodoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EditTodoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
