import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input("value")
  reviews;

  constructor() { }

  ngOnInit() {

  }
  counter(n:number){
    
    return new Array(n);
    
    
  }

}
