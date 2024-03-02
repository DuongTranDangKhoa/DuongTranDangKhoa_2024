import { Pool, PoolClient } from 'pg';
import { PostModel } from '../models/posts.model';
import { pool } from '../db';
import { Post, PostObject } from '../models/schemas/posts.schema';

async function getAllPost(): Promise<Post[]> {
    const postModel = new PostModel(pool);
    const postListRaw = await postModel.getAllPost();
    const postList = postListRaw.map((item) => {
      return new PostObject(item);
    });
    return postList;
  }
  async function getPostById(id: string): Promise<any> {
    const postModel = new PostModel(pool);
    const postList = await postModel.getPostById(id);
    return postList;
  }
  async function createPost(  id: string, owner: string, title: string, content: string, created_at: string, tags: string[]  ,client: PoolClient): Promise<void> {
    const postModel = new PostModel(pool);
    await postModel.createPost(id, owner, title, content, created_at , tags);
  } 
   async function updatePostById(  id: string, owner: string, title: string, content: string, created_at: string, tags: string[]  ,client: PoolClient): Promise<void> {
    const postModel = new PostModel(pool);
    await postModel.updatePostById(id, owner, title, content, created_at , tags);
  }
  async function deletePostById(  id: string, client: PoolClient): Promise<void> {
    const postModel = new PostModel(pool);
    await postModel.detelePostById(id);
  }
  const PostService = { getAllPost, getPostById, createPost, updatePostById, deletePostById};
  export default PostService;