import { Injectable } from '@angular/core';
import {
   Resolve,
} from '@angular/router';
import {Store} from "@ngxs/store";
import {InquireUnits} from "@store/actions";
import {mapTo} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UnitsResolver implements Resolve<null> {
  constructor(private store: Store) {}

  resolve() {
    return this.store.dispatch(new InquireUnits()).pipe(mapTo(null));
  }
}
