import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../models/post.model';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post!: Post;

  constructor(private postsService: PostsService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onViewDetails() {
    this.router.navigateByUrl(`${this.post._id}`)
  }

}
