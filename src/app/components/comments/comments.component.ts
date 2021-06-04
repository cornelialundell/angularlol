import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { Posts } from 'src/app/models/Posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  paramId = 0;
  post: Posts;

  comments: Comment[] = []

  constructor(private service: PostService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.paramId = parseInt(params.get('id'))
    })

    this.service.post$.subscribe((data: Posts) => { this.post = data })
    this.service.getPosts(this.paramId);

  }

}
