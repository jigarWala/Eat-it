import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  reviewForm:FormGroup;

  @Output()
  cancelEvent:EventEmitter<any> = new EventEmitter();
  
  constructor(private fb : FormBuilder) { }

  ngOnInit() {

    this.reviewForm = this.fb.group({
      author:['',[Validators.required]],
      stars:['',[Validators.required,Validators.min(0),Validators.max(5)]],
      body:['']
      });



  }
  cancelReviewHandler(event){
    event.preventDefault();

    // console.log("cancelling");
    this.cancelEvent.emit({});
    
  }
  
  submitReviewHandler(event){
    event.preventDefault();




  }


}
