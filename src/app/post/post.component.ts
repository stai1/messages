import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post: Post;
  constructor( private route: ActivatedRoute, private postService: PostService ) {}

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.postService.getPost(+this.route.snapshot.paramMap.get("id")).subscribe(
      result => this.post = result
    )
  }
}
