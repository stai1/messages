import { Injectable } from '@angular/core';
import { PropertyField } from './property-field';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PropertyFieldService {
  private propertyFields = [
    { value: "1", key: "title", validators: [Validators.required, Validators.pattern('.*[^\\s]+.*')]},
    new PropertyField({ value: "2", key: "content", validators: [Validators.required, Validators.pattern('.*[^\\s]+.*')] }),
    new PropertyField({ value: "3", key: "name", validators: [Validators.required, Validators.pattern('.*[^\\s]+.*')] })
  ];
  constructor() { }

  getPropertyFields() {
    return this.propertyFields;
  }
}
