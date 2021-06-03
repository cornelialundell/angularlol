import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Posts } from 'src/app/models/Posts';
import { BlogService } from 'src/app/services/blog/blog.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.scss']
})
export class ShowPostsComponent implements OnInit {
  @Input() post: Posts;
  @Output() editBlog = new EventEmitter<Posts>();
  commentsLength: number = 0;
  paramId: number;
  edit: Boolean;


  constructor( private router: Router,
    private service: PostService,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService) { }

  ngOnInit(): void {
 
      this.commentsLength = this.post.comments.length;

    

    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramId = parseInt(params.get('id'))
    })
  }

  handleComments(item: Posts): void {
    let id = item.id
   
this.router.navigate(['/comments', id])
  }

  deletePost(item): void {
    this.service.deletePost(item.id).subscribe(
      () => {
        this.blogService.getBlogPosts(this.paramId);
      },
      (err) => {console.log(err)}
    )
  }

  handleEdit(item: Posts): void {
    this.edit = true;
  }

updatePost(title, content, post: Posts): void {
  post.title = title.value;
  post.content = content.value;

  this.service.updatePosts(post).subscribe(
    (data: Posts) => {
      console.log(data)
      this.blogService.getBlogPosts(this.paramId)
    },
    (err) => {console.log(err)}
  )
}
}
