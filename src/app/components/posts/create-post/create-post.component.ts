import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Posts } from 'src/app/models/Posts';
import { BlogService } from 'src/app/services/blog/blog.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  @Input() blog: Blog;
  paramId = 0;

posts: Posts[] = []
  constructor(private service: PostService,
    private blogService: BlogService,
    private router: ActivatedRoute) { }

  ngOnInit():void {
 this.router.paramMap.subscribe((params) => {
   this.paramId = parseInt(params.get('id'))
})


  }

  createPost(title, content): void {
      let newPost = new Posts();
      newPost.title = title.value;
      newPost.content = content.value
      newPost.blogId = this.paramId;
      title.value = '';
      content.value = '';
      
      this.service.addPosts(newPost).subscribe(
        (data: Posts) => {
          console.log(data)
         
          this.blogService.getBlogPosts(this.paramId);
        }
      ),
      (error: any) => {console.log(error)}
     
     

  }

}
