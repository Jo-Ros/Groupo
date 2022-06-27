import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { PostsService } from '../services/posts-service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  //comments!: Comment[];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

}
