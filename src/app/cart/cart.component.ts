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

  private generateCartItems(){
    this.cartItems = []
    let keys = Object.keys(this.cart);
    this.totalAmount = 0;
    keys.forEach(key => {
      
      this.cartItems.push(this.cart[key])
      
      this.totalAmount += this.cart[key].item.price * this.cart[key].qty;
      
    });
  }
  constructor(private cartService: CartService) { 
    this.cart = cartService.getCart();
    this.generateCartItems();
    cartService.getCartStream()
    .subscribe(cart => {
      
      this.cart = cart;
  
      this.generateCartItems();
      // console.log(this.cart)
      
    })
    
  }
  
  
  ngOnInit() {
    // this.cart = this.cartService.getCart();

    
  }


  countChangeHandler(e, item) {


    this.cartService.buyItem(item, e.count);

  }

}
