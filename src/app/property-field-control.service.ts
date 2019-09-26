import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PropertyField } from './property-field';

@Injectable({
  providedIn: 'root'
})
export class PropertyFieldControlService {

  constructor() { }

  toFormGroup(propertyFields: PropertyField[]) {
    let group: any = {};
    for(let propertyField of propertyFields) {
      group[propertyField.key] = new FormControl(propertyField.value, propertyField.validators);
    }
    return new FormGroup(group);
  }
}
