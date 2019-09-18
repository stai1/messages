import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-composer',
  templateUrl: './post-composer.component.html',
  styleUrls: ['./post-composer.component.scss']
})
export class PostComposerComponent implements OnInit {
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
    this.postService.addPost(title, content, name);
    this.editorHidden = true
    this.messageHidden = true;
    return false;
  }

}
