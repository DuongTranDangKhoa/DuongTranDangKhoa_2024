import { NextFunction, Request, Response } from 'express';
import CommentService from '../services/comment.service';
import { DatabaseError } from 'pg';
import { Comment } from '../models/schemas/comments.schema';
import { pool } from '../db';
export async function getAllComment(req: Request, res: Response, next: NextFunction): Promise<void> {
  
    try {
      const commentList = await CommentService.getAllComment();
      res.send(commentList);
    } catch (err) {
      if (err instanceof DatabaseError) {
        console.log('Database error');
      }
      next(err);
    }
  }
  export async function getCommentById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { id } = req.params;
        if (id === '0') {
          res.send({ message: 'id invalid' });
          return;
        }
        const comment = await CommentService.getCommentById(id);
        res.send(comment.length === 0 ? 'Product not found!' : comment);
      } catch (err) {
        if (err instanceof DatabaseError) {
          console.log('Database error');
        }
        next(err);

    }
}
export async function createComment(req: Request, res: Response, next: NextFunction): Promise<void> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const commentList = req.body;

    await Promise.all(
      commentList.map(async (comment: any) => {
        await CommentService.createComment(
          comment.id,
          comment.owner,
          comment.post,
          comment.content,
          comment.created_at,
          client
        );
      })
    );
    await client.query('COMMIT');
  
    res.send('Create comment');
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
export async function updateCommentById(req: Request, res: Response, next: NextFunction): Promise<void> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const commentList = req.body;

    await Promise.all(
      commentList.map(async (comment: any) => {
        await CommentService.updateComment(
          comment.id,
          comment.owner,
          comment.post,
          comment.content,
          comment.created_at,
          client
        );
      })
    );

    await client.query('COMMIT');

    res.send('Update comment');
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
export async function deleteCommentById(req: Request, res: Response, next: NextFunction): Promise<void> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const commentList = req.body;

    await Promise.all(
      commentList.map(async (comment: any) => {
        await CommentService.deleteComment(
          comment.id,
          client
        );
      })
    );

    await client.query('COMMIT');

    res.send('Delete comment');
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