import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Profile } from '../profile/profile';
import { ActionSheetController, ActionSheet } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class Login {


  constructor(
  	public navCtrl: NavController, 
  	public actionSheetCtrl: ActionSheetController) {}

  private navProfile() {
    this.navCtrl.push(Profile);
  }


  public radarOptions(): void {
    let actionSheet: ActionSheet

  	actionSheet = this.actionSheetCtrl.create({
  		title: 'Radar Options',
  		cssClass: 'test-radar-options-actionsheet'
  	})
  	actionSheet.present()
  }

}