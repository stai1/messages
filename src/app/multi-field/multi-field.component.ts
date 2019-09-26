import { Component, OnInit, Input } from '@angular/core';
import { PropertyField } from '../property-field'
import { PropertyFieldControlService } from '../property-field-control.service';
import { FormGroup } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-multi-field',
  templateUrl: './multi-field.component.html',
  styleUrls: ['./multi-field.component.scss'],
  providers: [PropertyFieldControlService]
})
export class MultiFieldComponent implements OnInit {
  @Input() propertyFields: PropertyField[] = [];
  form: FormGroup;
  constructor(private pfcs: PropertyFieldControlService, private ps: PostService) { }

  ngOnInit() {
    this.form = this.pfcs.toFormGroup(this.propertyFields);
  }
  propertyFieldGetter() {
    console.log("test");
    return this.propertyFields;
  }
  onSubmit() {
    this.ps.addPost(this.form.value.title, this.form.value.content, this.form.value.name).subscribe();
    this.form.reset();

  }

}
