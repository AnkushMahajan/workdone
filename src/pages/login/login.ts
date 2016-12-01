import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Profile } from '../profile/profile';
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

  private navProfile() {
    this.navCtrl.push(Profile);
  }

  private googleSignIn() {

    let user = {};

    Utils.signInViaGoogle().then( result =>{
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.

      let userPromise = this.firebaseDB.ref('/users').set(user);
      userPromise.then(userResult => {
        // payload should be handled by redux actions
        this.navCtrl.push(Profile, {
          email: result.user.email,
          name: result.user.displayName,
          photoURL: result.user.photoURL,
          uid: result.user.uid,
        });
      })
      // ...
    }).catch( error => {
      // Handle Errors here.
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

      let user = {}
      let userPromise = this.firebaseDB.ref('/users').set(user);
      userPromise.then( userResult => {
       // payload should be handled by redux actions
       this.navCtrl.push(Profile, {
         email: result.user.email,
         name: result.user.displayName,
         photoURL: result.user.photoURL,
         uid: result.user.uid,
       });
      })
      // ...
    }).catch( error => {
      // Handle Errors here.
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


}
