import firebase from 'firebase';

export class Utils {

  private provider: any = null
  public static userSetUp: any = {}

  constructor(){}

  public static signInViaGoogle(): any {
    this.provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(this.provider);
  }

  public static signInViaFB(): any {
    this.provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(this.provider);
  }
}
