import {Component} from '@angular/core';
import {Store} from '@ngxs/store';

import {AgeType, Unit} from "@shared";
import {UnitsState} from "@store/states";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  units: Unit[];
  filteredUnit: Unit[];

  filter = {
    age: AgeType.All,
    cost: []
  }

  ageFilterItems = [
    {
      name: 'All',
      type: AgeType.All,
      active: true
    },
    {
      name: 'Dark',
      type: AgeType.Dark
    },
    {
      name: 'Feudal',
      type: AgeType.Feudal
    },
    {
      name: 'Castle',
      type: AgeType.Castle
    },
    {
      name: 'Imperial',
      type: AgeType.Imperial
    }
  ];
  costFilterItems = [
    {
      name: 'Wood',
      active: false,
      range: 0
    },
    {
      name: 'Food',
      active: false,
      range: 0
    },
    {
      name: 'Gold',
      active: false,
      range: 0
    },
  ]

  constructor(private store: Store) {
    this.units = this.store.selectSnapshot(UnitsState.getUnits);
    this.filteredUnit = this.units;
  }

  addFilter(name: string, value: string | number, type: 'costs' | 'ages' | 'range') {
    if (type === 'costs') {
      this.filter.cost.push({name: value});
    } else if (type === "range") {
      this.filter.cost.filter(item => item.name === name)[0]['range'] = value;
    } else {
      this.filter[name] = value;
    }

    this.applyFilter();
  }

  removeFilter(name: string) {
    this.filter.cost.splice(this.filter.cost.findIndex(x => x.name === name), 1);

    this.applyFilter();
  }

  applyFilter() {

    if (this.filter.age === AgeType.All) {
      this.filteredUnit = this.units;
    } else {
      this.filteredUnit = this.units.filter(item => item.age === this.filter.age)
    }

    if (this.filter.cost.length > 0) {
      let cost = this.filter.cost.map(x => {
        return {
          name: x.name,
          range: x.range
        }
      });


      this.filteredUnit = this.filteredUnit.filter(x => {
        if (cost.length === 1) {
          if (cost[0].range) {
            return (x.cost) && (x.cost[cost[0].name]) && (x.cost[cost[0].name] <= cost[0].range)
          }
          return (x.cost) && (x.cost[cost[0].name])
        } else if (cost.length === 2) {
          if (cost[0].range && !cost[1].range) {
            return (x.cost) && (x.cost[cost[0].name]) && (x.cost[cost[1].name]) && (x.cost[cost[0].name] <= cost[0].range)
          } else if (cost[0].range && cost[1].range)
            return (x.cost) && (x.cost[cost[0].name]) && (x.cost[cost[1].name]) && (x.cost[cost[0].name] <= cost[0].range) && (x.cost[cost[1].name] <= cost[1].range)
        } else if (cost.length === 3) {
          return (x.cost) && (x.cost[cost[0].name]) && (x.cost[cost[1].name]) && (x.cost[cost[2].name])
        }
      })

    }

  }


}
