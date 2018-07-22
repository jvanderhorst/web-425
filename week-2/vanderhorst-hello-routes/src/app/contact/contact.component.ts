import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <div class="container">
    <div class="row">
      <h2>This page will help you Contact us!</h2>
    </div>
  </div>
`,
  styles: [`
  .container {
    margin-top: 20px;
  }
  h2 {
    color: orange;
  }
  `
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
