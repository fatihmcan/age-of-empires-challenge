import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

import { environment } from '../../../environments/environment';
import {Unit, Units} from "../models";
import {filter} from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  private readonly END_POINT = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUnits(): Observable<Units> {
    return this.http.get<Units>(`${this.END_POINT}`);
  }


}
