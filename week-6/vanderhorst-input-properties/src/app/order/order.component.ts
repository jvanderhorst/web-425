import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <span *ngIf="!!stockSymbol">Buying {{quantity}} shares of {{stockSymbol}}</span>
  `,
  styles: [`
    :host { 
      background-color: slategray; 
      padding: 25px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
      color: white;
    }
  `]
})
export class OrderComponent implements OnInit {

  @Input() quantity: number;
  @Input() stockSymbol: string;

  constructor() { }

  ngOnInit() {
  }

}
