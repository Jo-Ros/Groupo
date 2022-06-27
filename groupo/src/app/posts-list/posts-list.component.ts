import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../models/post.model';
import { PostsService } from '../services/posts-service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  post$!: Observable<Post[]>;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.post$ = this.postsService.getAllPosts();
  }

}
