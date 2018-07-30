import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>You are now visiting the Home page!</h2>
      </div>
    </div>
  `,
  styles: [ `
    .container {
      margin-top: 20px; 
    }
    h2 {
      color: gray;
    }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
