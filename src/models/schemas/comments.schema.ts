export type Comment = {
    id: string;
    owner: string; 
    post: string; 
    content : string; 
    created_at: string
 };
 
 export class CommentObject {
    id: string;
    owner: string; 
    post: string; 
    content : string; 
    created_at: string
   constructor(comment: Comment) {
     this.id = comment.id;
     this.owner = comment.owner;
     this.post = comment.post;
     this.content = comment.content;
     this.created_at = comment.created_at;
   }
 }
 