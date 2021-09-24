import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Store} from "@ngxs/store";
import {getUnit, InquireUnits} from "@store/actions";
import {mapTo} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UnitResolver implements Resolve<null> {
  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params.id;
    return this.store.dispatch(new getUnit(id)).pipe(mapTo(null));
  }
}
