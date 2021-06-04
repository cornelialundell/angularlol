import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment'

@Component({
  selector: 'app-show-comments',
  templateUrl: './show-comments.component.html',
  styleUrls: ['./show-comments.component.scss']
})
export class ShowCommentsComponent implements OnInit {
  @Input() comment: Comment;

  constructor() { }

  ngOnInit(): void {
  }

}
