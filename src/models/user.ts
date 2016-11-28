/**
 * User Model that should map to the user registered on the app
 */
export class User {
  public id: number;
  public lastName: string;
  public firstName: string;
  public workDesc: string;
  public email: string;

  constructor(userObj: Object){
    this.lastName = userObj.lastName
    this.firstName = userObj.firstName
    this.workDesc = userObj.workDesc
    this.email = userObj.email
  }
}
