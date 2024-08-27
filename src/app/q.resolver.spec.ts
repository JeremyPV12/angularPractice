import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { qResolver } from './q.resolver';

describe('qResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => qResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
