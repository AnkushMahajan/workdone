import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//page to route to on click of the button
import { ProfileSetup } from '../profile-setup/profile-setup'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  private navProfile() {
    this.navCtrl.push(ProfileSetup);
  }

  private socialLogin() {

  }
}
