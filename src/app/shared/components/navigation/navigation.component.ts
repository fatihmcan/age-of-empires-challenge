import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(public router: Router) {}


  ngOnInit(): void {
  }

}
