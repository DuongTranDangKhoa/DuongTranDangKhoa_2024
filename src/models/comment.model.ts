import { BaseModel } from './base.model';
import * as commentSQL from '../models/sql/comments.sql';
import { Comment } from './schemas/comments.schema';
export class CommentModel extends BaseModel { 
    public async getAllComment(): Promise<Comment[]> {
        const queryConfig = commentSQL.getAllComment();
        const queryResult = await this.query(queryConfig);
        return queryResult as Comment[];
    }
    public async getCommentById(id: string): Promise<Comment>{
        const queryConfig = commentSQL.getAllComment();
        const queryResult = await this.query(queryConfig);
        return queryResult as Comment;
    }
    public async createComment( id: string,owner: string,post: string, content : string,created_at: string): Promise<void> {
        const queryConfig = commentSQL.createComment(id, owner, post, content, created_at);
        await this.query(queryConfig);
    }
    public async updateComment(id: string,owner: string,post: string, content : string, created_at: string): Promise<void> {
        const queryConfig = commentSQL.updateComment(id, owner, post, content, created_at);
        await this.query(queryConfig);
    }
    public async deleteComment(id: string): Promise<void> {
        const queryConfig = commentSQL.deleteComment(id);
        await this.query(queryConfig);
    };
}