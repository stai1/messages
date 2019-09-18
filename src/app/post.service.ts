import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [
    new Post(0, 0, "Post1", "This is a post", "User1"),
    new Post(0, 2, "Post2", "This is post2", "User2")
  ]; // TODO: unhardcode and use database
  constructor() { }

  addPost(title: string, content: string, name: string): void {
    this.posts.push(new Post(0, 0, title, content, name)); // TODO: unhardcode, use database
  }

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }
}
