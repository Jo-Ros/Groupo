import { Comment } from "../models/comment.model";

export class Post {
    userId!: string;
    title!: string;
    text!: string;
    image?: string;
    likes!: [string];
    comments!: [Comment];
    createdDate!: Date;
}