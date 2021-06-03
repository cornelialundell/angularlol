import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Posts } from 'src/app/models/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts = new Subject<Posts[]>();
  posts$ = this.posts.asObservable()

  private post = new Subject<Posts>();
  post$ = this.post.asObservable()

  constructor(private http: HttpClient) { }

  // getPosts(paramId: number): Observable<Posts> {
  //   return this.http.get<Posts>("https://mi-blogs.azurewebsites.net/api/Posts/" + paramId
  //   )

  // }

  getPosts(paramId: number): void {
    this.http.get<Posts>("https://mi-blogs.azurewebsites.net/api/Posts/" + paramId)
    .subscribe((data: Posts) => {this.post.next(data)})

  }


  addPosts(post: Posts): Observable<Posts> {
    return this.http.post<Posts>('https://mi-blogs.azurewebsites.net/api/posts', post, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
        'Content-Type': 'application/json',


      })
    })
  }

  updatePosts(post: Posts): Observable<Posts> {
    return this.http.put<Posts>('https://mi-blogs.azurewebsites.net/api/posts/' + post.id, post)
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>('https://mi-blogs.azurewebsites.net/api/posts/' + id)
  }
}
