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

  postFromForm(id: number, form: FormGroup) {
    if (!this.hasError(form)) {
      var title = form.get('title').value.trim();
      var content = form.get('content').value.trim();
      var name = form.get('name').value.trim();
      return new Post(id, new Date(), title, content, name);
    }
    return null;
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
    var post = this.postFromForm(null, form);
    if(post) {
      return this.http.post<Post>(this.postsUrl, post);
    }
    return null;
  }
  updatePost(p: Post, form: FormGroup): Observable<Post> {
    var post = this.postFromForm(p.id, form);
    if(post) {
      return this.http.put<Post>(this.postsUrl, post);
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
