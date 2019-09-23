import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-composer',
  templateUrl: './post-composer.component.html',
  styleUrls: ['./post-composer.component.scss', '../post-view/post-view.component.scss']
})
export class PostComposerComponent implements OnInit {
  @Input() posts: Post[];
  editorHidden: boolean = true;
  messageHidden: boolean = true;
  data: {
    title: string;
    content: string;
    name: string;
  } = { title: "", content: "", name: "" };
  form: FormGroup;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(this.data.title),
      content: new FormControl(this.data.content),
      name: new FormControl(this.data.name)
    });
  }

  showEditor() {
    this.editorHidden = false;
  }

  hideEditor() {
    this.editorHidden = true;
    this.messageHidden = true;
  }
  createPost() {
    var title = this.form.get('title').value.trim();
    var content = this.form.get('content').value.trim();
    var name = this.form.get('name').value.trim();
    if (title === "" || content === "" || name === "") {
      this.messageHidden = false;
      return false;
    }
    this.postService.addPost(title, content, name).subscribe(post => this.posts.push(post));
    this.hideEditor();
    return false;
  }

}
