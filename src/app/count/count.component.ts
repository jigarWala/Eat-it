import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  @Input("value")
  count;
  @Output()
  countChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  decrement(e){
    e.stopPropagation();
    if(this.count>0)
    this.count--;

    this.countChange.emit({count:this.count});
    
  }
  increment(e){
    e.stopPropagation();
    this.count++;
    this.countChange.emit({count:this.count});
  }
  countChangeHandler(e){
    this.count = e.count;
  }

}
