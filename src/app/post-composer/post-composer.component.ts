import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Observable } from 'rxjs';

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

  showEditor() {
    this.editorHidden = false;
  }

  hideEditor() {
    this.editorHidden = true;
  }
  createPost() {
    this.clickedSubmit = true;
    var postObservable: Observable<Post> = this.postService.createPost(this.form);
    if (postObservable) {
      postObservable.subscribe(post => this.posts.push(post));
      this.hideEditor();
      this.form.reset();
      this.clickedSubmit = false;
    }
    return false;
  }

}
