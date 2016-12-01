/**
 * User Model that should map to the user registered on the app
 */
export class User {
  public id: number;
  public name: string;
  public workDesc: string;
  public email: string;
  public photoURL: string;

  constructor(userObj: Object){
    this.name = userObj.name
    this.workDesc = userObj.workDesc
    this.email = userObj.email
  }
}
