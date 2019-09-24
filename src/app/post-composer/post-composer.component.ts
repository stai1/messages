import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  data: {
    title: string;
    content: string;
    name: string;
  } = { title: "", content: "", name: "" };
  form: FormGroup;
  clickedSubmit = false;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(this.data.title, [Validators.required, Validators.pattern('.*[^\\s]+.*')]),
      content: new FormControl(this.data.content, [Validators.required, Validators.pattern('.*[^\\s]+.*')]),
      name: new FormControl(this.data.name, [Validators.required, Validators.pattern('.*[^\\s]+.*')]),
    });
  }

  hasError() {
    for (let key in this.form.value) {
      for (let validator in this.form.get(key).errors) {
        if (this.form.get(key).errors[validator])
          return true;
      }
    }
    return false;
  }

  showEditor() {
    this.editorHidden = false;
  }

  hideEditor() {
    this.editorHidden = true;
  }
  createPost() {
    this.clickedSubmit = true;
    if (!this.hasError()) {
      var title = this.form.get('title').value.trim();
      var content = this.form.get('content').value.trim();
      var name = this.form.get('name').value.trim();
      this.postService.addPost(title, content, name).subscribe(post => this.posts.push(post));
      this.hideEditor();
      for (let key in this.form.value) {
        this.form.get(key).setValue("");
      }
      this.clickedSubmit = false;
    }
    return false;
  }

}
