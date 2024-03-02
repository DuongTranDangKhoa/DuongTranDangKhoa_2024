import { Pool, PoolClient } from 'pg';
import { CommentModel } from '../models/comment.model';
import { pool } from '../db';
import { Comment, CommentObject } from '../models/schemas/comments.schema';

async function getAllComment(): Promise<Comment[]> {
    const commentModel = new CommentModel(pool);
    const commentListRaw = await commentModel.getAllComment();
    const commentList = commentListRaw.map((item) => {
      return new CommentObject(item);
    });
    return commentList;
}
async function getCommentById(id: string): Promise<any> {
    const commentModel = new CommentModel(pool);
    const commentList = await commentModel.getCommentById(id);   
    return commentList;
}
async function createComment(id: string,owner: string,post: string, content : string,created_at: string, client: PoolClient): Promise<any>{
  const commentModel = new CommentModel(pool);
  const commentList = await commentModel.createComment(id,owner,post,content,created_at);
}
async function updateComment(id: string,owner: string,post: string,content : string, created_at: string, client: PoolClient):Promise<any>{
  const commentModel = new CommentModel(pool);
  const commentList = await commentModel.updateComment(id,owner,post,content,created_at);
}
async function deleteComment(id: string,client: PoolClient):Promise<any>{
  const commentModel = new CommentModel(pool);
  const commentList = await commentModel.deleteComment(id);
}
const CommentService = { getAllComment, getCommentById, createComment, updateComment, deleteComment};
export default CommentService;