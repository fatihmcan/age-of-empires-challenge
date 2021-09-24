import { Action, Selector, State, StateContext } from "@ngxs/store";
import { map, tap} from "rxjs/operators";

import { Unit, UnitsService } from "@shared";
import { UnitsModel } from "../models";
import { getUnit, InquireUnits } from "../actions";
import { Injectable } from "@angular/core";

@State<UnitsModel.State>({
  name: UnitsModel.NAME,
  defaults: UnitsModel.DEFAULTS
})

@Injectable()
export class UnitsState {
  constructor(private unitService: UnitsService) {}

  @Selector()
  static getUnits({ units }: UnitsModel.State): Unit[] {
    return units;
  }

  @Selector()
  static getUnit({ unit }: UnitsModel.State): Unit {
    return unit;
  }

  @Action(InquireUnits)
  inquireUnits({ patchState }: StateContext<UnitsModel.State>) {
    return this.unitService.getUnits().pipe(
      map(item => item.units),
      tap(data =>
        patchState({ units: data }),
      ),
    );
  }

  @Action(getUnit)
  getUnits({ patchState }: StateContext<UnitsModel.State>, { payload }: getUnit) {
    return this.unitService.getUnits().pipe(
      map(item => item.units),
      tap(data => patchState({ unit: data.filter(item => item.id === Number(payload))[0]})),
    );
  }

}
