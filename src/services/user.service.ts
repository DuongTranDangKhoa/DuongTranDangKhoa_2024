
import { Pool, PoolClient } from 'pg';
import { UserModel } from '../models/user.model';
import { pool } from '../db';
import { User, UserObject } from '../models/schemas/user.schema';


async function getAllUsers(): Promise<User[]> {
  const userModel = new UserModel(pool);
  const userListRaw = await userModel.getAllUsers();
  const userList = userListRaw.map((item) => {
    return new UserObject(item);
  });
  return userList;
}

async function getUserById(id: string): Promise<any> {
  const userModel = new UserModel(pool);
  const userList = await userModel.getUserById(id);
  return userList;
}
async function getUserByUserName(name: string): Promise<any> {
  const userModel = new UserModel(pool);
  const userList = await userModel.getUserByUserName(name);
  return userList;
}
async function createUser(  userid: string, username: string, password: string, name : string, dob: Date, created_at: string,   client: PoolClient): Promise<void> {
  const userModel = new UserModel(pool);
  await userModel.createUser(userid, username, password, name, dob, created_at);
}

async function updateUserById(userid: string, username: string, password: string,  name : string, dob: Date, created_at: string,   client: PoolClient): Promise<void> {
  const userModel = new UserModel(pool);
  await userModel.updateUserById(userid, username, password, name, dob, created_at);
}

async function deleteUserById(id: string, client: PoolClient): Promise<void> {
  const userModel = new UserModel(pool);
  await userModel.deleteUserById(id);
}

const UserService = { getAllUsers, getUserById, createUser, updateUserById, deleteUserById,getUserByUserName };
export default UserService;
