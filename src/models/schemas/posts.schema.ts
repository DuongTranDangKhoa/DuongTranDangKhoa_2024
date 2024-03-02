export type Post = {
     id: string;
     owner: string; 
     title: string; 
     content : string; 
     tags: string[];
     created_at: string
  };
  
  export class PostObject {
    id: string;
    owner: string; 
    title: string; 
    content : string; 
    tags: string[];
    created_at: string
    constructor(post: Post) {
      this.id = post.id;
      this.owner = post.owner;
      this.title = post.title;
      this.content = post.content;
      this.tags = post.tags;
      this.created_at = post.created_at;
    }
  }
  