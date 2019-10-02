import { Injectable } from '@angular/core';
import { PropertyField } from './property-field';
import { Validators } from '@angular/forms';
import { fieldPattern } from './field-pattern';

@Injectable({
  providedIn: 'root'
})
export class PropertyFieldService {
  private propertyFields = [
    { value: "", key: "title", validators: [Validators.required, fieldPattern]},
    new PropertyField({ value: "", key: "content", validators: [Validators.required, fieldPattern] }),
    new PropertyField({ value: "", key: "name", validators: [Validators.required, fieldPattern] })
  ];
  constructor() { }

  getPropertyFields() {
    return this.propertyFields;
  }
}
