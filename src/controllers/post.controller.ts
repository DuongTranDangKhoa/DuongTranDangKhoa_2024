import { NextFunction, Request, Response } from 'express';
import PostService from '../services/post.service';
import { DatabaseError } from 'pg';
import { Post } from '../models/schemas/posts.schema';
import { pool } from '../db';

export async function getAllPost(req: Request, res: Response, next: NextFunction): Promise<void> {
  
    try {
      const postList = await PostService.getAllPost();
      res.send(postList);
    } catch (err) {
      if (err instanceof DatabaseError) {
        console.log('Database error');
      }
      next(err);
    }
  }
export async function getPostById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { id } = req.params;
        if (id === '0') {
          res.send({ message: 'id invalid' });
          return;
        }
        const post = await PostService.getPostById(id);
        res.send(post.length === 0 ? 'Product not found!' : post);
      } catch (err) {
        if (err instanceof DatabaseError) {
          console.log('Database error');
        }
        next(err);

    }
}
export async function createPost(req: Request, res: Response, next: NextFunction): Promise<void> {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const postList = req.body;
  
      await Promise.all(
        postList.map(async (post: any) => {
          await PostService.createPost(
            post.id,
            post.owner,
            post.title,
            post.content,
            post.created_at,
            post.tags,
            client
          );
        })
      );
  
      await client.query('COMMIT');
  
      res.send('Create post');
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
  export async function updatePostById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const postList = req.body;
  
      await Promise.all(
        postList.map(async (post: any) => {
          await PostService.updatePostById(
            post.id,
            post.owner,
            post.title,
            post.content,
            post.created_at,
            post.tags,
            client
          );
        })
      );
  
      await client.query('COMMIT');
  
      res.send('Update post');
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
  export async function deletePostById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const postList = req.body;
  
      await Promise.all(
        postList.map(async (post: any) => {
          await PostService.deletePostById(
            post.id,          
            client
          );
        })
      );
  
      await client.query('COMMIT');
  
      res.send('Delete post');
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
  