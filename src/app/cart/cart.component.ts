import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cart = {}
  cartItems = []

  totalAmount: number = 0;


  constructor(private cartService: CartService) { }

  ngOnInit() {
    // this.cart = this.cartService.getCart();
    this.cartService.getCartStream()
    .subscribe(cart => {
      this.cart = cart;
      this.cartItems = []
      let keys = Object.keys(this.cart);
      this.totalAmount = 0;
      keys.forEach(key => {
        
        this.cartItems.push(this.cart[key])
        
        this.totalAmount += this.cart[key].item.price * this.cart[key].qty;
        
      });
      // console.log(this.cartItems)
    })

  }


  countChangeHandler(e, item) {


    this.cartService.buyItem(item, e.count);

  }

}
