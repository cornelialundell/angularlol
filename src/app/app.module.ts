import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { ShowBlogsComponent } from './components/start/show-blogs/show-blogs.component';
import { CreateBlogComponent } from './components/start/create-blog/create-blog.component'
import { FormsModule } from '@angular/forms';
import { CreatePostComponent } from './components/posts/create-post/create-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { ShowPostsComponent } from './components/posts/show-posts/show-posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CreateCommentComponent } from './components/comments/create-comment/create-comment.component';
import { ShowCommentsComponent } from './components/comments/show-comments/show-comments.component';
import { EditComponent } from './components/start/edit/edit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ShowBlogsComponent,
    CreateBlogComponent,
    CreatePostComponent,
    PostsComponent,
    ShowPostsComponent,
    CommentsComponent,
    CreateCommentComponent,
    ShowCommentsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
