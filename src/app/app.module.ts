import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import {Component} from '@angular/core';
export const firebaseConfig = {
  apiKey: 'AIzaSyAYzBNO7N6Snxii9LXh_it9Mo7TajbV8b0',
  authDomain: 'todoapp-e0381.firebaseapp.com',
  storageBucket: 'gs://coffeehack-5a2ca.appspot.com',
  databaseURL: 'https://coffeehack-5a2ca.firebaseio.com/',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
