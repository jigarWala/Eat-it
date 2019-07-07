import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _http:HttpClient) { }


  getItems(){
    let apiUrl = "http://localhost:8181/api/products";
    return this._http.get(apiUrl) // asyncurl = ""

  }

  getReviews(id) {
    let apiUrl = `http://localhost:8181/api/products/${id}/reviews`;
    return this._http.get(apiUrl) // async
  }
  
  postReviews(review){
    // console.log(review);
    let id = review.itemId;
    let apiUrl = `http://localhost:8181/api/products/${id}/reviews`;
    this._http.post(apiUrl,review).toPromise().then(console.log).catch(console.error)
  }

}

