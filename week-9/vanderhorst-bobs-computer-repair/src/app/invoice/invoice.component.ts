import { Component, OnInit, Input, Inject } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Repair } from '../repair';
import {MatDialog, MatDialogConfig} from "@angular/material";


@Component({
  selector: 'app-invoice',
  template: `
    <p>
      {{repair.name}}
    </p>
  `,
  styles: []
})
export class InvoiceComponent implements OnInit {

  

  constructor() { 
    
  }

  ngOnInit() {
  }

}

