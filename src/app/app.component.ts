import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eat-IT-v1';

  
  numberOfItemsinCart = 0;

  constructor(private cartService:CartService,private itemService:ItemService) {

  }
  items:Array<any> = []

  ngOnInit() {
    this.itemService.getItems().subscribe((items:any)=>{
      this.items = items;
    })

  }
  updateCart(obj) {
    this.cartService.buyItem(obj.item,obj.count);
  }

}
