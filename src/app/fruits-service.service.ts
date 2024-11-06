import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitsServiceService {

  constructor() { }

  private fruitListEmitter = new BehaviorSubject<{fruitName : string, fruitPrize : number}[]>([]);
  fruitList$ = this.fruitListEmitter.asObservable();

  addFruits(fruit : {fruitName : string, fruitPrize : number}) {
    const olde = this.fruitListEmitter.getValue();
    this.fruitListEmitter.next([...olde, fruit]);
  }
}
