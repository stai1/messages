import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'api/posts';
  posts: Post[] = [];
  constructor(private http: HttpClient) { }

  addPost(title: string, content: string, name: string): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, new Post(null, new Date(), title, content, name))
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.postsUrl+"/"+id)
  }
}
