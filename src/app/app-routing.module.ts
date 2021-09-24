import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./shared";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'units',
    loadChildren: () => import('./modules/units/units.module').then((m) => m.UnitsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
