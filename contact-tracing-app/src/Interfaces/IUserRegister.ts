export namespace IUser {
  
  export class UserData 
  {
      userID: string = ""
      phoneNumber: string = ""; //this is optional 
      emailID: string = ""; //this is optional
 
      constructor(userid:string, phnum: string, emailid: string)
      {
        this.userID = userid;
        this.phoneNumber = phnum;
        this.emailID = emailid;
      }
  }

  export interface IUserRegister {

    
    registerUser(user: UserData): any;
  }  
}

