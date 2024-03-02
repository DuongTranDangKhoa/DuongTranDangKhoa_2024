import { QueryConfig } from 'pg';

export function getAllUsers(): QueryConfig {
  const text = `SELECT id, username, password, name, dob, created_at FROM public.users;`;
  return { text };
}

export function getUserById(id: string): QueryConfig {
  const text = `SELECT id, username, password, name, dob, created_at FROM public.users WHERE id = $1`;
  const values = [id];
  return { text, values };
}
export function getUserByUsername(username: string): QueryConfig {
  const text = `SELECT id, username, password, name, dob, created_at FROM public.users WHERE username = $1`;
  const values = [username];
  return { text, values };
}
export function createUser( userid: string, username: string, password: string, name : string, dob: Date, created_at: string): QueryConfig {
 if(name == null && dob ==  null){
  const text = `INSERT INTO public.users(
    id, username, password,  created_at)
    VALUES ($1, $2, $3, $4);`;
  const values = [userid, username, password,created_at];
  return { text, values };
 }else if(name == null ){
  const text = `INSERT INTO public.users(
    id, username, password, dob, created_at)
    VALUES ($1, $2, $3, $4, $5);`;
  const values = [userid, username, password,dob,created_at];
  return { text, values };
 }else if(dob ==  null){
  const text = `INSERT INTO public.users(
    id, username, password, name, created_at)
    VALUES ($1, $2, $3, $4, $5);`;
  const values = [userid, username, password,name,created_at];
  return { text, values };
 } else{
  const text = `INSERT INTO public.users(
    id, username, password, name, dob, created_at)
    VALUES ($1, $2, $3, $4, $5, $6);`;
  const values = [userid, username, password, name,dob,created_at];
  return { text, values };
  }
}

export function updateUserById(userid: string, username: string, password: string, name: string, dob: Date, created_at :  string): QueryConfig {
  const text = `UPDATE public.users
	              SET username= $1, password= $2, name=$3, dob=$4, created_at=$5
	              WHERE  id= $6 ;`;
  const values = [username, password, name, dob, created_at , userid];
  return { text, values };
}

export function deleteUserById(id: string): QueryConfig {
  const text = `DELETE FROM public.users
	              WHERE id= $1 ;`;
  const values = [id];
  return { text, values };
}
