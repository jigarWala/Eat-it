import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  numberOfItemsinCart = 0;

  constructor(private cartService:CartService,private itemService:ItemService) {

  }
  items:Array<any> = []

  ngOnInit() {
    this.itemService.getItems().subscribe((items:any)=>{
      this.items = items;
      // console.log("item list init() subcribe")
      // console.log(this.items)
      
    })
    this.numberOfItemsinCart = Object.keys(this.cartService.getCart()).length;
  }
  updateCart(obj) {
    this.cartService.buyItem(obj.item,obj.count);
    this.numberOfItemsinCart = Object.keys(this.cartService.getCart()).length;
  
  }
  getItemCount(id:string){
    // console.log(id,this.cartService.getCart()) ???????
    try{
      return this.cartService.getCart()[id].qty
    }catch(e){
      return 0;
    }
  }


}
