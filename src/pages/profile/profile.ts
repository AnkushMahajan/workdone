import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { SideMenu } from '../../common/components/side-menu/side-menu';

//import user model to bind our user form data
import { User } from '../../models/user'


@Component({
  templateUrl: 'profile.html',
  directives: [SideMenu],
})

export class Profile {

  public name: string
  public email: string
  public workDesc: string
  public photoURL: string

  constructor(
      private formBuilder: FormBuilder,
      private navParams: NavParams,
      private sideMenu: SideMenu,
      private navCtrl: NavController){

    if(navParams){
      this.name = navParams.get('name')
      this.email = navParams.get('email')
      this.photoURL = navParams.get('photoURL')
    }
  }

  private ionViewWillLoad() {
    this.todo = this.formBuilder.group({
      name: ['', Validators.required],
      workDesc: [''],
      email: ['', Validators.required],
    });
  }
  private logForm(){
    let userCreated = new User(this.todo.value)
    console.log(userCreated);
  }
}

