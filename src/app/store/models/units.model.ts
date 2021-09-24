import { Unit } from "@shared";

export namespace UnitsModel {
  export const NAME = 'UnitsStateModel';
  export const DEFAULTS = {
    units: [] as Unit[],
    unit: {} as Unit
  } as State

  export interface State {
    units: Unit[];
    unit: Unit;
  }
}
