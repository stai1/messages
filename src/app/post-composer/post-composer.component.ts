import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Observable } from 'rxjs';
import { fieldPattern } from '../field-pattern';

@Component({
  selector: 'app-post-composer',
  templateUrl: './post-composer.component.html',
  styleUrls: ['./post-composer.component.scss', '../post-view/post-view.component.scss']
})
export class PostComposerComponent implements OnInit, OnChanges {
  @Output() outpost: EventEmitter<Post> = new EventEmitter<Post>();
  @Input() inpost: Post;
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

  }

  ngOnChanges() {
    console.log(this.inpost);
    if (this.inpost) {
      this.data = {
        title: this.inpost.title,
        content: this.inpost.content,
        name: this.inpost.name
      }
    }
    this.form = new FormGroup({
      title: new FormControl(this.data.title, [Validators.required, fieldPattern]),
      content: new FormControl(this.data.content, [Validators.required, fieldPattern]),
      name: new FormControl(this.data.name, [Validators.required, fieldPattern]),
    });
  }

  showEditor() {
    this.editorHidden = false;
  }

  hideEditor() {
    this.editorHidden = true;
  }
  submitPost() {
    this.clickedSubmit = true;
    var postObservable: Observable<Post>
    if (!this.inpost) {
      console.log(this.inpost);
      postObservable = this.postService.createPost(this.form);
    }
    else {
      postObservable = this.postService.updatePost(this.inpost, this.form);
    }
    if (postObservable) {
      //postObservable.subscribe(post => this.outpost.emit(post));

      // bad hotfix; postObservable returns null for put request for some reason even though the update happens
      postObservable.subscribe(post => { if (post) this.outpost.emit(post); });
      if (this.inpost) {
        this.outpost.emit(this.postService.postFromForm(this.inpost.id, this.form))
      }

      this.hideEditor();
      this.form.reset();
      this.clickedSubmit = false;
    }
    return false;
  }

}
