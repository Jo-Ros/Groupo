import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormComponent } from './form/form.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    LandingPageComponent,
    FormComponent,
    PostsListComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
