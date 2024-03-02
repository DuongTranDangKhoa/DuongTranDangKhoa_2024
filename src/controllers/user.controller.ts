import { NextFunction, Request, Response } from 'express';
import UserService from '../services/user.service';
import { DatabaseError } from 'pg';
import { User } from '../models/schemas/user.schema';
import { pool } from '../db';
export async function getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
  
  try {
    const userList = await UserService.getAllUsers();
    res.send(userList);
  } catch (err) {
    if (err instanceof DatabaseError) {
      console.log('Database error');
    }
    next(err);
  }
}

export async function getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    if (id === '0') {
      res.send({ message: 'id invalid' });
      return;
    }
    const user = await UserService.getUserById(id);
    res.send(user.length === 0 ? 'User not found!' : user);
  } catch (err) {
    if (err instanceof DatabaseError) {
      console.log('Database error');
    }
    next(err);
  }

}

export async function createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const usertList = req.body;

    await Promise.all(
      usertList.map(async (user: any) => {
        await UserService.createUser(
          user.id,
          user.username,
          user.password,
          user.name,
          user.dob,
          user.created_at,
          client
        );
      })
    );

    await client.query('COMMIT');

    res.send('Create User');
  } catch (err) {
    if (err instanceof DatabaseError) {
      console.log('Database error');
    }
    client.query('ROLLBACK');
    next(err);
  } finally {
    await client.release();
  }
}

export async function updateUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const usertList = req.body;

    await Promise.all(
      usertList.map(async (user: any) => {
        await UserService.updateUserById(
          user.id,
          user.username,
          user.password,
          user.name,
          user.dob,
          user.created_at,
          client
        );
      })
    );

    await client.query('COMMIT');

    res.send('Update User');
  } catch (err) {
    if (err instanceof DatabaseError) {
      console.log('Database error');
    }
    client.query('ROLLBACK');
    next(err);
  } finally {
    await client.release();
  }
}

export async function deleteUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const userList = req.body;

    await Promise.all(
      userList.map(async (user: any) => {
        await UserService.deleteUserById(
          user.id,
          client
        );
      })
    );
    await client.query('COMMIT');
    res.send('User deleted!');
  } catch (err) {
    if (err instanceof DatabaseError) {
      console.log('Database error');
    }
    client.query('ROLLBACK');
    next(err);
  } finally {
    await client.release();
  }
}
