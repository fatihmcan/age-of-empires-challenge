import { TestBed } from '@angular/core/testing';

import { UnitsResolver } from './units.resolver';
import {NgxsModule} from "@ngxs/store";

describe('UnitsResolver', () => {
  let resolver: UnitsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot()
      ],
    });
    resolver = TestBed.inject(UnitsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
