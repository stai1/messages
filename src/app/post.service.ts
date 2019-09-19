import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'api/posts';
  posts: Post[] = [
//    new Post(0, new Date(0), "Post1", "This is a post", "User1"),
//    new Post(1, new Date(2), "Post2", "This is post2", "User2")
  ]; // TODO: unhardcode and use database
  constructor(private http: HttpClient) { }

  addPost(title: string, content: string, name: string): Observable<Post> {
    //this.posts.push(new Post(0, new Date(), title, content, name)); // TODO: unhardcode, use database
    return this.http.post<Post>(this.postsUrl, new Post(null, new Date(), title, content, name))
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
    //return of(this.posts);
  }

  getPost(id: number): Observable<Post> {
    /**for(let post of this.posts) {
      if(post.id === id) {
        return of(post);
      }
    }**/
    return this.http.get<Post>(this.postsUrl+"/"+id)
  }
}
