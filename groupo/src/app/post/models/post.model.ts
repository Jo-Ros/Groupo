import { Comment } from "./comment.model";

export class Post {
    _id!: string;
    userId!: string;
    title!: string;
    text!: string;
    image?: string;
    likes!: [string];
    likesNumber!: number;
    comments!: [Comment];
    createdDate!: Date;
}