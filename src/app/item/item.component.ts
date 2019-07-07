import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input("value")
  item;

  reviews:Array<any>=[];
  
  @Input("howManyPurchased")
  count = 0;

  @Input()
  idx;
  
  addReviewFlag:boolean=false;

  @Output()
  countChange = new EventEmitter();


  currentTab = 1;

  constructor(private itemService:ItemService) { }

  ngOnInit() {

  }

  buyItem(obj) {
    let doEmit:boolean  = true;
    // console.log(obj)
    if(obj.count === undefined){
      this.count++;
      // obj.count=this.count;
    }
    else{
      if(obj.count === this.count)
        doEmit = false;
      this.count=obj.count; 

    }
    
    if(doEmit){
      this.countChange.emit({item:this.item,count:this.count});
    }

  }

  isCurrentTab(tab) {
    return this.currentTab === tab;
  }

  changeTab(e, tab) {
    e.preventDefault();
    this.currentTab = tab;
    if(tab===3){
      this.itemService.getReviews(this.item.id).subscribe((response:any)=>{
        this.reviews = response;
        // console.log(response)
      });
    }
  }
  
  addReviewHandler(event){
    event.preventDefault();
    // event.stopPropogation();
    // console.log("Adding");
    this.addReviewFlag = true;
  }
  toggleForm(e){
    // console.log("item component cancelling")
    this.addReviewFlag = false;
  }
  reviewSubmitHandler(review){
    
    this.reviews.push(review);    
    // console.log(review);
    this.itemService.postReviews({...review,itemId:this.item.id});
  }

}
