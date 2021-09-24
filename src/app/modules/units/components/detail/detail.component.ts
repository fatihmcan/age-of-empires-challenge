import { Component } from '@angular/core';
import {Store} from "@ngxs/store";
import {UnitsState} from "@store/states";
import {Unit} from "@shared";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  unit: Unit;

  constructor(private store: Store) {
    this.unit = this.store.selectSnapshot(UnitsState.getUnit);
  }

}
