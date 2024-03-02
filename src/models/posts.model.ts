import { BaseModel } from './base.model';
import * as postsSQL from '../models/sql/posts.sql';
import { Post } from './schemas/posts.schema';
export class PostModel extends BaseModel {
    public async getAllPost(): Promise<Post[]> {
      const queryConfig = postsSQL.getAllPosts();
      const queryResult = await this.query(queryConfig);
      return queryResult as Post[];
    }
    public async getPostById(id: string): Promise<Post> {
    const queryConfig = postsSQL.getPostById(id);
    const queryResult = await this.query(queryConfig);
    return queryResult as Post;
    }
    public async createPost(id: string, owner: string, title: string, content: string, created_at: string, tags: string[] ): Promise<void> {
        const queryConfig = postsSQL.createPost(id, owner, title, content, created_at , tags);
        await this.query(queryConfig);
    }
    public async updatePostById(id: string, owner: string, title: string, content: string, created_at: string, tags: string[] ): Promise<void> {
        const queryConfig = postsSQL.updatePost(id, owner, title, content, created_at , tags);
        await this.query(queryConfig);
    }
    public async detelePostById(id: string): Promise<void> {
        const queryConfig = postsSQL.deletePost(id);
        await this.query(queryConfig);
    }
    
}