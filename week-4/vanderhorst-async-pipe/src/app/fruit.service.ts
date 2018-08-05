import { Injectable } from '@angular/core';
import {Fruit} from "./fruit";
import {Observable} from "rxjs";
import { of } from 'rxjs';

@Injectable()
export class FruitService {

  fruits: Fruit[] = [
    {id: 1, name: "Orange", pricePerPound: "2.25", quantity: 3},
    {id: 2, name: "Grape", pricePerPound: "3.99", quantity: 2},
    {id: 3, name: "Kiwi", pricePerPound: "4.15", quantity: 5},
    {id: 4, name: "Pineapple", pricePerPound: "3.75", quantity: 1},
    {id: 5, name: "Banana", pricePerPound: "2.75", quantity: 4}
  ];

  constructor() { }

  getFruits(): Observable<Fruit[]> {
    return of(this.fruits);
  }
}