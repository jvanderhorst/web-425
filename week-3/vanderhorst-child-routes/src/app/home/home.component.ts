import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <p>
          Welcome to the Home page!
        </p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px; 
    }
    p {
      color: purple;
      font-weight: bold;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
