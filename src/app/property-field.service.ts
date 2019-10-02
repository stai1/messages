import { Injectable } from '@angular/core';
import { PropertyField } from './property-field';
import { Validators } from '@angular/forms';
import { fieldPattern } from './field-pattern';

@Injectable({
  providedIn: 'root'
})
export class PropertyFieldService {
  private propertyFields = [
    { value: "1", key: "title", validators: [Validators.required, fieldPattern]},
    new PropertyField({ value: "2", key: "content", validators: [Validators.required, fieldPattern] }),
    new PropertyField({ value: "3", key: "name", validators: [Validators.required, fieldPattern] })
  ];
  constructor() { }

  getPropertyFields() {
    return this.propertyFields;
  }
}
