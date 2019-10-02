import { Component, OnInit, Input } from '@angular/core';
import { PropertyField } from '../property-field'
import { PropertyFieldControlService } from '../property-field-control.service';
import { FormGroup } from '@angular/forms';
import { PostService } from '../post.service';
import { PropertyFieldService } from '../property-field.service';

@Component({
  selector: 'app-multi-field',
  templateUrl: './multi-field.component.html',
  styleUrls: ['./multi-field.component.scss'],
  providers: [PropertyFieldControlService]
})
export class MultiFieldComponent implements OnInit {
  private propertyFields: PropertyField[] = [];
  form: FormGroup;
  constructor( private propertyFieldService: PropertyFieldService, private pfcs: PropertyFieldControlService, private ps: PostService) { }

  ngOnInit() {
    // must do this instead of simply calling getPropertyFields() in html
    // because getter returns new value each time, causing directives to respond
    this.propertyFields = this.propertyFieldService.getPropertyFields();
    this.form = this.pfcs.toFormGroup(this.propertyFields);
  }
  propertyFieldGetter() {
    console.log("test");
    return this.propertyFields;
  }
  onSubmit() {
    var postObservable = this.ps.createPost(this.form);
    if(postObservable) {
      postObservable.subscribe();
      this.form.reset();
      // TODO: Display confirmation of post
    }

  }

}
