import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { Post } from '../../models/post.model';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  buttonText!: string;
  post$!: Observable<Post>;

  constructor(private postsService: PostsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buttonText = 'Like'

    const postId = this.route.snapshot.params['id'];
    this.post$ = this.postsService.getPostById(postId);
  }

  onLike(postId: string) {
    if ( this.buttonText === 'Like') {
      this.post$ = this.postsService.likePost(postId, 'liked').pipe(
        tap(() => this.buttonText = 'Unlike')
      )
    }
    else {
      this.post$ = this.postsService.likePost(postId, 'unliked').pipe(
        tap(() => this.buttonText === 'Like')
      )
    }
  }

}
