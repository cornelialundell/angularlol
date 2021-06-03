import { Posts } from './Posts';

export class Blog {
    id: number;
    title: string;
    created: Date;
    userId: number = 1547;
    posts: Posts[];
}
