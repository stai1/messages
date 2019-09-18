import { Component, OnInit } from '@angular/core';

import { Post } from './post';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  posts: Post[] = [];
  constructor() { }

  ngOnInit() {
    this.posts.push(new Post(0, 0, "Post1", "This is a post", "User1"));
    this.posts.push(new Post(0, 2, "Post2", "This is post2", "User2"));
  }
}