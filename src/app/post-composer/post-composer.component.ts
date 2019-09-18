import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-composer',
  templateUrl: './post-composer.component.html',
  styleUrls: ['./post-composer.component.scss']
})
export class PostComposerComponent implements OnInit {
  @Input() editorHidden: boolean = true;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  showEditor(): void {
    this.editorHidden = false;
  }
  createPost(title: string, content: string, name: string) {
    this.postService.addPost(title, content, name);
    this.editorHidden = true;
    return false;
  }

}
