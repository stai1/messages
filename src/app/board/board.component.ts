import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

import { Post } from '../post';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(result => this.posts = result);
  }
}