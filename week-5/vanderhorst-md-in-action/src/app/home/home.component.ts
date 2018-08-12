import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="parent" fxLayout="row">
    <div class="left" fxFlex="25"><p>Hello, Welcome to my Angular Material Layout exercise.</p></div>
    <div class="right" fxFlex="75"><p>Click the Login link above, Please!</p></div>
  </div>
  `,
  styles: [`
    .parent { height: 100px; }
    .left { background-color: #ff4081; }
    .right { background-color: #607d8b; }
    p { margin: 25px; }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
