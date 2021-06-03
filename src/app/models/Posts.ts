import { Blog } from './Blog';

export class Posts {
    id: number;
    title: string;
    content: string;
    created: Date;
    modified: Date;
    blogId: number;
    blog: Blog;
    comments: Comment[];
    
}