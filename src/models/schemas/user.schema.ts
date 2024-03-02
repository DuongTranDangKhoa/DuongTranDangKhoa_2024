export type User = {
  userid: string;
   username: string; 
   password: string; 
   name : string; 
   dob: Date; 
   created_at: string
};

export class UserObject {
  userid: string; 
  username: string; 
  password: string; 
  name: string ;
   dob: Date; 
   created_at: string
  constructor(user: User) {
    this.userid = user.userid;
    this.username = user.username;
    this.password = user.password;
    this.name = user.name;
    this.dob = user.dob;
    this.created_at = user.created_at;
  }
}
