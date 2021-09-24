import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent, DetailComponent} from "./components/";
import {UnitsResolver} from "@store/resolvers";
import {UnitResolver} from "../../store/resolvers/unit.resolver";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: [UnitsResolver]
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    resolve:[UnitResolver]
  }

];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [UnitsResolver, UnitResolver]
})
export class UnitsRoutingModule { }


