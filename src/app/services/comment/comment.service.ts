import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Comment } from 'src/app/models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments = new Subject<Comment[]>()
  comments$ = this.comments.asObservable()

  constructor(private http: HttpClient) { }

  addComment(comment: Comment): Observable<Comment> {
    console.log(comment)
    return this.http.post<Comment>('https://mi-blogs.azurewebsites.net/api/Comments', comment)
  }
}
