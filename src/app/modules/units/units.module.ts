import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsRoutingModule } from './units-routing.module';

import { MainComponent, DetailComponent } from './components';
import { SharedModule } from "../../shared/shared.module";
import {NgxsModule} from "@ngxs/store";
import {UnitsState} from "@store/states";
import {environment} from "../../../environments/environment";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MainComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    UnitsRoutingModule,
    SharedModule,
    NgxsModule.forRoot([UnitsState], {
      developmentMode: !environment.production
    }),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UnitsModule { }
