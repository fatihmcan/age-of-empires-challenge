import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";


import { NavigationComponent, HomeComponent, TableComponent } from './components/';

@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    TableComponent
  ],
  exports: [
    NavigationComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
