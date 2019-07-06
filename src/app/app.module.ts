import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ReviewComponent } from './review/review.component';
import { CartComponent } from './cart/cart.component';
import { CountComponent } from './count/count.component';
import { HttpClientModule } from '@angular/common/http';
import { ReviewFormComponent } from './review-form/review-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ReviewComponent,
    CartComponent,
    CountComponent,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
