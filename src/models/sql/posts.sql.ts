import { QueryConfig } from 'pg';
export function getAllPosts(): QueryConfig {
    const text = `SELECT id, owner, title, content, created_at, tags FROM public.posts;`;
    return { text };
  }
export function getPostById(id: string) : QueryConfig {
    const text = `SELECT id, owner, title, content, created_at, tags FROM public.posts WHERE id = $1`;
    const values = [id];
  return { text, values };
}
export function createPost(id: string, owner: string, title: string, content: string, created_at: string, tags: string[]) : QueryConfig {
    const text = `INSERT INTO public.posts(
        id, owner, title, content, created_at, tags)
        VALUES ($1, $2, $3, $4, $5, $6);`;
    const values = [id, owner, title, content, created_at , tags];
    return { text, values };
}
export function updatePost(id: string, owner: string, title: string, content: string, created_at: string, tags: string[]) : QueryConfig {
    const text = `UPDATE public.posts
	SET  owner= $2, title= $3, content= $4, created_at= $5, tags= $6
	WHERE id= $1;`;
    const values = [id, owner, title, content, created_at , tags];
    return { text, values };
}
export function deletePost(id: string)  : QueryConfig {
    const text = `DELETE FROM public.posts
	              WHERE id=$1;`
    const values = [id]
    return { text, values };
}