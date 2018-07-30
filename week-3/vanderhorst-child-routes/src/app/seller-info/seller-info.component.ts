import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-seller-info',
  template: `
    Larry Thomas is the seller, the seller ID is: {{ sellerID }}
  `,
  styles: [ `
    :host { background: gray;
    color: white;}
  `
  ]
})
export class SellerInfoComponent implements OnInit {

  sellerID: string;

  constructor(route: ActivatedRoute) {
    this.sellerID = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
