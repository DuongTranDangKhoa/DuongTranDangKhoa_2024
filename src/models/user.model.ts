import { BaseModel } from './base.model';
import * as userSQL from '../models/sql/user.sql';
import { User } from './schemas/user.schema';


export class UserModel extends BaseModel {
  public async getAllUsers(): Promise<User[]> {
    const queryConfig = userSQL.getAllUsers();
    const queryResult = await this.query(queryConfig);
    return queryResult as User[];
  }

  public async getUserById(id: string): Promise<User> {
    const queryConfig = userSQL.getUserById(id);
    const queryResult = await this.query(queryConfig);
    console.log(queryResult);
    return queryResult;
  }
  public async getUserByUserName(username: string): Promise<User> {
    const queryConfig = userSQL.getUserByUsername(username);
    const queryResult = await this.query(queryConfig);
    console.log(queryResult);
    return queryResult;
  }
  public async createUser( userid: string, username: string, password: string, name : string, dob: Date, created_at: string): Promise<void> {
    const queryConfig = userSQL.createUser(userid, username, password, name, dob, created_at);
    await this.query(queryConfig);
  }

  public async updateUserById(userid: string, username: string, password: string, name : string, dob: Date, created_at: string): Promise<void> {
    const queryConfig = userSQL.updateUserById(userid, username, password, name, dob, created_at);
    await this.query(queryConfig);
  }

  public async deleteUserById(id: string): Promise<void> {
    const queryConfig = userSQL.deleteUserById(id);
    await this.query(queryConfig);
  }
}
