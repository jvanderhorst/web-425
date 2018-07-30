import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  template: `
    <div class="container">
      <div class="row">
        <p>
          This is the best product you can possibly buy!
        </p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px; 
    }
    p {
      color: steelblue;
      font-weight: bold;
    }
  `]
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
