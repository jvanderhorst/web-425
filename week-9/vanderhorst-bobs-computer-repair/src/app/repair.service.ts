import { Injectable } from '@angular/core';
import {Repair} from "./repair";
import {Observable} from "rxjs";
import { of } from 'rxjs';

@Injectable()
export class RepairService {
  repairs = [
    new Repair('Password Reset:', 39.99),
    new Repair('Spyware Removal:', 99.99),
    new Repair('RAM Upgrade:', 129.99),
    new Repair('Software Installation:', 49.99),
    new Repair('Tune-up:', 89.99),
    new Repair('Keyboard Cleaning:', 45.99),
    new Repair('Disk Clean-up', 149.99)
  ];
  

  constructor() { }

  getRepairs(): Observable<Repair[]> {
    return of(this.repairs)
  }
}
