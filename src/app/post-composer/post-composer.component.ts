import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-composer',
  templateUrl: './post-composer.component.html',
  styleUrls: ['./post-composer.component.scss']
})
export class PostComposerComponent implements OnInit {
  @Input() posts: Post[];
  editorHidden: boolean = true;
  messageHidden: boolean = true;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  createPost(title: string, content: string, name: string) {
    title = title.trim();
    content = content.trim();
    name = name.trim();
    if (title === "" || content === "" || name === "") {
      this.messageHidden = false;
      return false;
    }
    this.postService.addPost(title, content, name).subscribe(post => this.posts.push(post));
    this.editorHidden = true
    this.messageHidden = true;
    return false;
  }

}
