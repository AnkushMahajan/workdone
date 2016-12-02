import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Profile } from '../profile/profile';
import { HomePage } from '../home/home';
import { Utils } from '../../common/utils'

import firebase from 'firebase';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class Login {

  constructor(public navCtrl: NavController) {
    this.firebaseDB = firebase.database()
  }

  private firebaseDB: any
  private user: any

  private googleSignIn() {

    Utils.signInViaGoogle().then( result =>{
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.

      this.logOrRegister(result);

      // ...
    }).catch( error => {
      // Handle Errors here.
      let user = {}
      user.error = true;
      user.errorCode = error.code;
      user.errorMessage = error.message;
      // The email of the user's account used.
      user.email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      user.credential = error.credential;
      console.log('error', user);
    })

  }

  private facebookSignIn() {
    Utils.signInViaFB().then( result =>{
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.

      this.logOrRegister(result);

      // ...
    }).catch( error => {
      // Handle Errors here.
      let user = {}
      user.error = true;
      user.errorCode = error.code;
      user.errorMessage = error.message;
      // The email of the user's account used.
      user.email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      user.credential = error.credential;
      console.log('error', user);
    })
  }

  private createUser(userObj): Object {
    let user = {};
    user.email = userObj.email;
    user.name = userObj.displayName;
    user.photoURL = userObj.photoURL;
    user.uid = userObj.uid;
    return user
  }

  private logOrRegister(result): void {
    this.firebaseDB.ref('/users/' + result.user.uid).once('value').then( snapshot => {
      if(snapshot.val()){
        this.navCtrl.push(HomePage, snapshot.val());
      }else{
        let user =this.createUser(result.user)
        let userPromise = this.firebaseDB.ref('/users/' + result.user.uid).set(user);
        userPromise.then(userResult => {
          // payload should be handled by redux actions
          this.navCtrl.push(Profile, user);
        })
      }
    });
  }

  private linkedinSignIn() {
    console.log('linked in clicked');
  }
}
