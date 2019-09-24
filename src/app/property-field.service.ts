import { Injectable } from '@angular/core';
import { PropertyField } from './property-field';

@Injectable({
  providedIn: 'root'
})
export class PropertyFieldService {

  constructor() { }

  getPropertyFields() {
    return [
      new PropertyField({value:"1", key: "name"}),
      new PropertyField({value:"2", key: "nickname"}),
      new PropertyField({value:"3", key: "othername"})
    ]
  }
}
