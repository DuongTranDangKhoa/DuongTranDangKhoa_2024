import { QueryConfig } from 'pg';
export function getAllComment(): QueryConfig {
    const text = `SELECT id, owner, post, content, created_at FROM public.comments;`;
    return { text };
}
export function getCommentById(id: string): QueryConfig {
    const text = `SELECT id, owner, post, content, created_at
	FROM public.comments
	where id = $1;`;
    const values = [id];
  return { text, values };
}
export function createComment( id: string,owner: string,post: string, content : string,created_at: string): QueryConfig {
    const text = `INSERT INTO public.comments(
        id, owner, post, content, created_at)
        VALUES ($1, $2, $3, $4, $5);`;
    const values = [id, owner, post, content, created_at];
    return { text, values };
}
export function  updateComment( id: string,owner: string,post: string, content : string,created_at: string): QueryConfig {
    const text = `UPDATE public.comments
	SET  owner=$2, post=$3, content=$4, created_at=$5
	WHERE id=$1;`;
    const values = [id, owner, post, content, created_at];
    return { text, values };
}
export function deleteComment(id: string)  : QueryConfig {
    const text = `DELETE FROM public.comments
	              WHERE id=$1;`
    const values = [id]
    return { text, values };
}