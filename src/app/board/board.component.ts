import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../post.service';

import { Post } from '../post';
import { PostComposerComponent } from '../post-composer/post-composer.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @ViewChild(PostComposerComponent, {static: false}) child:PostComposerComponent;
  posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(result => this.posts = result);
  }

  showEditor() {
    this.child.showEditor();
  }

  editorHidden() {
    return this.child.editorHidden;
  }
}