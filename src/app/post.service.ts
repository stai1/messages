import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from './post';
import { FormGroup } from '@angular/forms';

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

  hasError(form: FormGroup) {
    for (let key in form.value) {
      for (let validator in form.get(key).errors) {
        if (form.get(key).errors[validator])
          return true;
      }
    }
    return false;

  }
  createPost(form: FormGroup) {
    if (!this.hasError(form)) {
      var title = form.get('title').value.trim();
      var content = form.get('content').value.trim();
      var name = form.get('name').value.trim();
      return this.addPost(title, content, name);
    }
    return null;
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.postsUrl+"/"+id)
  }
}
