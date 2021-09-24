import {Component, Input,} from '@angular/core';
import {Unit} from "@shared/models";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor() { }

  @Input()
  tHead: string[] = ['id', 'Name', 'Age', 'Costs'];


  @Input()
  tBody: Unit[];

}
