import { Component, OnInit } from '@angular/core';
import { Repair } from "../repair";
import {Observable} from "rxjs";
import {RepairService} from "../repair.service"
import {MatDialog, MatDialogConfig} from "@angular/material";




@Component({
  selector: 'app-services',
  template: `
  <mat-card>
    <mat-card-title>
      Available Services
    </mat-card-title>
    <p>Today's date {{today | date}}</p>
    <ul class="services-list">
      <li *ngFor="let repair of repairs">
        <mat-checkbox>
          {{ repair.name }} {{ repair.price }}
        </mat-checkbox>
      </li>
    </ul>
    <br><br>
    <form class="form-container">
      <mat-form-field class="form-full-width">
        <input matInput placeholder="Parts" value="Enter Value">
      </mat-form-field>
      <mat-form-field class="form-full-width">
        <input matInput placeholder="Labor" value="Hours of Labor @$50.00">
      </mat-form-field>
      <mat-form-field>
        <input matInput [matDatepicker]="picker" placeholder="Choose a date">
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
    </form>
    <button mat-raised-button (click)="openInvoiceDialog()" color="accent">Submit</button>
  </mat-card>
  `,
  styles: [`
    mat-card {
      width: 75%;
      margin: 0 auto;
      top: 100px;    
      bottom: 100px; 
    }
    .services-list li{
      list-style: none;
    }
    .form-container {
      min-width: 300px;
      max-wdith: 600px;
    }
    .form-full-width {
      width: 100%;
    }
  `]
})
export class ServicesComponent {
  
  repairs = [
    new Repair('Password Reset:', 39.99),
    new Repair('Spyware Removal:', 99.99),
    new Repair('RAM Upgrade:', 129.99),
    new Repair('Software Installation:', 49.99),
    new Repair('Tune-up:', 89.99),
    new Repair('Keyboard Cleaning:', 45.99),
    new Repair('Disk Clean-up', 149.99)
  ];
  
  today: number = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
