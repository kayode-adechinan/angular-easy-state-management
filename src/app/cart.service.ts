import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from './cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private initialCart: Cart = {totalItem: 0};
  private cartTracker = new BehaviorSubject<Cart>(this.initialCart);

   /** Allows subscription to the behavior subject as an observable */
   getCart(): Observable<Cart> {
    return this.cartTracker.asObservable();
  }


  /**
   * Allows updating the current value of the behavior subject
   * @param val a number representing the current value
   * @param delta a number representing the positive or negative change in current value
   */
  setCart(val: number, delta: number): void {

    this.cartTracker.next({totalItem: (val + delta)});
  }

   /** Resets the count to the initial value */
   resetCart(): void {
    this.cartTracker.next(this.initialCart);
  }

}
