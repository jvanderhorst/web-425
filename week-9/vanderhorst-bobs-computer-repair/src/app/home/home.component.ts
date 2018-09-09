import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div>
    <mat-card>
      <img img-mat-card src="../assets/images/alexandru-500.png">
      <mat-card-content>
        <h3>Our total tech support can offer the repairs and services you need.</h3>
      </mat-card-content>
      <mat-card-actions>
        <div fxFlex></div>
        <button mat-raised-button [routerLink]="['/services']" color="accent">Services</button>
      </mat-card-actions>
    </mat-card>
  </div>
  `,
  styles: [`
    mat-card {
      width: 75%;
      margin: 0 auto;
      top: 100px;    
      bottom: 100px; 
    }
    mat-card img {
      max-width: 500px;
      min-width: 100px;
    }
    mat-card {
      max-width: 500px;
      min-width: 100px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
