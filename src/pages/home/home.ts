import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Profile } from '../profile/profile';

//page to route to on click of the button

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private name: string
  private photoURL: string
  private email: string

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    if(navParams){
      this.name = navParams.get('name')
      this.email = navParams.get('email')
      this.photoURL = navParams.get('photoURL')
    }
  }
  private goToProfile() {
    this.navCtrl.push(Profile, this.navParams);
  }
}
