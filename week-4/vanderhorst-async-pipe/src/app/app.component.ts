import { Component } from '@angular/core';
import {Fruit} from "./fruit";
import {Observable} from "rxjs";
import {FruitService} from "./fruit.service";

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </nav>
    <br /><br />
    <div class="container">
      <div class="row">
        <h2>Fruit Details</h2>
        <table class="table table-hover table-striped">
          <thead class="tbl-header">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price per pound</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let fruit of fruits | async">
              <td>{{ fruit.id }}</td>
              <td>{{ fruit.name }}</td>
              <td>{{ fruit.pricePerPound }}</td>
              <td>{{ fruit.quantity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
  .tbl-header {
    background-color: steelblue;
    color: white; 
  }
`],
})
export class AppComponent {

  fruits: Observable<Fruit[]>;
  title = 'app';

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
  }
}
