import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PropertyField } from '../property-field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-single-field',
  templateUrl: './single-field.component.html',
  styleUrls: ['./single-field.component.scss']
})
export class SingleFieldComponent implements OnInit {
  @Input() propertyField: PropertyField;
  @Input() form: FormGroup;
  @Output() changed: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

}
