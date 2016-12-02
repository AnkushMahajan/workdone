import { Injectable } from '@angular/core'

import { NgRedux } from 'ng2-redux'

import { RootState } from '../../store'

import firebase from 'firebase';

@Injectable()
export class UserActions {

  private firebaseDB: any;

  constructor (private ngRedux: NgRedux<RootState>) {
    this.firebaseDB = firebase.database()
  }

  // Create USERS
  public static CREATE_USER_START: string = 'CREATE_USER_START'
  public static CREATE_USER_RESOLVE: string = 'CREATE_USER_RESOLVE'
  public static CREATE_USER_REJECT: string = 'CREATE_USER_REJECT'

  // Read
  public static GET_USER_START: string = 'GET_USER_START'
  public static GET_USER_RESOLVE: string = 'GET_USER_RESOLVE'
  public static GET_USER_REJECT: string = 'GET_USER_REJECT'

  // Update
  public static UPDATE_USER_START: string = 'UPDATE_USER_START'
  public static UPDATE_USER_RESOLVE: string = 'UPDATE_USER_RESOLVE'
  public static UPDATE_USER_REJECT: string = 'UPDATE_USER_REJECT'

  // Delete
  public static DELETE_USER_START: string = 'DELETE_USER_START'
  public static DELETE_USER_RESOLVE: string = 'DELETE_USER_RESOLVE'
  public static DELETE_USER_REJECT: string = 'DELETE_USER_REJECT'

  public createUser(user: any): void {
    // Start request for creating user
    this.ngRedux.dispatch({type: UserActions.CREATE_USER_START})
    let userPromise = this.firebaseDB.ref('/users/' + user.uid).set(user);
    userPromise.then(userResult => {
      // payload should be resolved by firebase, i need to work on that
      this.ngRedux.dispatch({
        type: UserActions.CREATE_USER_RESOLVE,
        payload: user
      })
    }).catch(error => {
      this.ngRedux.dispatch({type: UserActions.CREATE_USER_REJECT})
    })
  }

  public updateUser(user: any): void {
    // Start request for updating a user
    this.ngRedux.dispatch({type: UserActions.UPDATE_USER_START})
  }

  public getUserByUID(uid: string): void {
    // Start request for getting a user
    this.ngRedux.dispatch({type: UserActions.GET_USER_START})
  }
}
