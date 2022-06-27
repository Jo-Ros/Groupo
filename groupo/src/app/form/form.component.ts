import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';

import { Post } from '../models/post.model';
import { PostsService } from '../services/posts-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  postForm!: FormGroup;
  postPreview$!: Observable<Post>;

  constructor( private formBuilder: FormBuilder,
               private postService: PostsService) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: [null],
      text: [null],
      image: [null]
    })

    this.postPreview$ = this.postForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        likes: 0,
        comments: 0
      }))
    )
  }

  onSubmitForm() {
    console.log(this.postForm);
  }

}
