import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { Post } from './post';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  private id = 0;
  createDb(reqInfo?: import("angular-in-memory-web-api").RequestInfo): {} | import("rxjs").Observable<{}> | Promise<{}> {
    const posts: Post[] = [
      new Post(this.genId(), new Date(0), "Post1", "This is a post", "User1"),
      new Post(this.genId(), new Date(2), "Post2", "This is post2", "User2")
    ];
    console.log(posts);
    return {posts};
  }
  genId(): number {
    return this.id++;
  }
}
