import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = {}
  private cartStream: Subject<any> = new Subject();
  constructor() { }

  getCartStream(){
    return this.cartStream;
  }
  getCart(){
    return this.cart;
  }

  buyItem(item, qty) {


    if (qty <= 0) {
      delete this.cart[item.id]
    }
    else {
      this.cart[item.id] = { item, qty };
    }

    this.cartStream.next(this.cart);
  }




}
