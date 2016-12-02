import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Login } from '../pages/login/login';
import firebase from 'firebase';


@Component({
  template: `<ion-menu [content]="mycontent">
 
  <ion-header>
    <ion-toolbar>
      <ion-title>Pages</ion-title>
    </ion-toolbar>
  </ion-header>
 
  <ion-content>
    <ion-list>
      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">
        {{p.title}}
      </button>
    </ion-list>
  </ion-content>
 
</ion-menu>
<ion-nav #mycontent [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = Login;

  constructor(platform: Platform) {

    // Initialize Firebase
    let config = {
      apiKey: "AIzaSyDscYaVRH0tXCBc0efNfqie4-bQ_QeKkME",
      authDomain: "workdone-7cee3.firebaseapp.com",
      databaseURL: "https://workdone-7cee3.firebaseio.com",
      storageBucket: "workdone-7cee3.appspot.com",
      messagingSenderId: "519784053906"
    }
    firebase.initializeApp(config);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
