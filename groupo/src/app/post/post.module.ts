import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './components/post/post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { FormComponent } from './components/form/form.component';
import { PostRoutingModule } from './post-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostDetailsComponent } from './components/post-details/post-details.component';



@NgModule({
  declarations: [
    PostComponent,
    PostsListComponent,
    FormComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PostComponent,
    PostsListComponent,
    FormComponent,
    PostDetailsComponent
  ]
})
export class PostModule { }
