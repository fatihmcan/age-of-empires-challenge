import { TestBed } from '@angular/core/testing';

import { UnitResolver } from './unit.resolver';
import {NgxsModule} from "@ngxs/store";

describe('UnitResolver', () => {
  let resolver: UnitResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot()
      ],
    });
    resolver = TestBed.inject(UnitResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
