import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { pipe } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  reviewForm:FormGroup;

  errors = {}

  @Output()
  closeForm:EventEmitter<any> = new EventEmitter();

  @Output()
  reviewSubmit:EventEmitter<any> = new EventEmitter();
  constructor(private fb : FormBuilder) { }

  ngOnInit() {

    this.reviewForm = this.fb.group({
      author:['',[Validators.required]],
      stars:['',[Validators.required,Validators.min(0),Validators.max(5)]],
      body:['',[Validators.required,Validators.minLength(20)]]
      },{updateOn:'blur'});


    this.reviewForm.get("author").statusChanges.subscribe(e=>{

      if(e==="INVALID")
        this.errors['author'] = "Please add your name";
        else
        delete this.errors['author'];
      })
      
      this.reviewForm.get("stars").statusChanges.subscribe(e=>{
        
      if(e==="INVALID")
      this.errors['stars'] = "Please enter a valid rating (0-5)";
      else
      delete this.errors['stars'];
    })
    

    this.reviewForm.get("body").statusChanges
    .subscribe(e=>{
          if(e === "INVALID"){
            this.errors['body'] = "Please add description (minimum 20 characters)";
          }
          else
          delete this.errors['body'];
        })
        
      }
  cancelReviewHandler(event){
    event.preventDefault();

    this.closeForm.emit({});
    
  }
  
  submitReviewHandler(event){
    event.preventDefault();
    
    if(this.reviewForm.valid){
      // console.log("review form",this.reviewForm.value);
      this.reviewSubmit.emit(this.reviewForm.value);
      this.closeForm.emit({});
    }
    else{
      if(!this.reviewForm.get('author').valid)
      this.errors['author'] = "Please add your name";
      if(!this.reviewForm.get('stars').valid)
      this.errors['stars'] = "Please enter a valid rating (0-5)";
      if(!this.reviewForm.get('body').valid)
      this.errors['body'] = "Please add description (minimum 20 characters)";
    
    }
    
    
  }
  
  
}
