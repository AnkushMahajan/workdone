import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import firebase from 'firebase';

//import user model to bind our user form data
import { User } from '../../models/user'


@Component({
  templateUrl: 'profile.html'
})

export class Profile {

  public name: string
  public email: string
  public workDesc: string
  public photoURL: string
  public uid: string
  private firebaseDB: any

  constructor(
    private formBuilder: FormBuilder,
    private navParams: NavParams,
    private navCtrl: NavController,
    private menuCtrl: MenuController){

    if(navParams){
      this.name = navParams.get('name')
      this.email = navParams.get('email')
      this.photoURL = navParams.get('photoURL')
      this.uid = navParams.get('uid')
      this.workDesc = navParams.get('workDesc')
    }
    this.firebaseDB = firebase.database()
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
    userCreated.photoURL = this.photoURL
    userCreated.uid = this.uid
    let updates = {}
    updates['/users/' + this.uid] = userCreated;
    this.firebaseDB.ref().update(updates).then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error)
    })
  }
}

