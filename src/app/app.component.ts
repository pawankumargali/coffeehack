import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks: FirebaseListObservable<any>;
  coffeeshop=true;
  less10card=true;
  great10card=true;
  letter=false
  less="active"
  greater="tp"
  title = 'app works!';
  constructor(af: AngularFire) {

  this.tasks = af.database.list('/taska');
}
  accept(){
    console.log("hello")
    this.coffeeshop=false;
    this.letter=true
    this.less10()
  }
  less10(){
      this.less10card=false;
      this.great10card=true;
      this.less="active"
      this.greater="tp"
      console.log("leess10")

  }
  great(){
    this.less10card=true;
    this.great10card=false;
    this.less="tp"
    this.greater="active"
    console.log("greats10")


  }
  select(){
    alert("Thank You!I will get back to you")
    var d = new Date();
    var n = d.getTime();
    this.tasks.push({accept:n , a:"aa"});
  }
  reject(){
    alert("Are you Sure do you want to reject?")
  }
}
