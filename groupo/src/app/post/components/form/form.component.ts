import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Post } from '../../models/post.model';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  postForm!: FormGroup;
  postPreview$!: Observable<Post>;

  constructor( private formBuilder: FormBuilder,
               private postService: PostsService,
               private http: HttpClient) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: [null],
      text: [null],
      image: [null]
    }, { updateOn: 'submit'})

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
    console.log(this.postForm.value);
    this.postService.postPost(this.postForm.value).pipe(
      tap((savedPost) => {
          if (savedPost) {
              console.log(savedPost);
          }
          else {
              console.log('problem');
          }
      })
  )
  }

}
