import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Comment } from 'src/app/models/Comment';
import { Posts } from 'src/app/models/Posts';
import { CommentService } from 'src/app/services/comment/comment.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {
  @Input() blog: Blog;
  paramId = 0;
  post: Posts

  comments: Comment[];

  constructor(private service: CommentService,
    private PostService: PostService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.paramId = parseInt(params.get('id'))
    })
    console.log(this.paramId)
  }

  createComment(content): void {
    let newComment = new Comment();
    newComment.content = content.value
    newComment.postId = this.paramId
    console.log(content.value)

    content.value = '';

    this.service.addComment(newComment).subscribe(
      (data: Comment) => {
        console.log(data)
        this.PostService.getPosts(this.paramId)

      }
    ),
      (error: any) => { console.log(error) }






  }

}
