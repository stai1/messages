import { ValidatorFn } from '@angular/forms';

export class PropertyField {
  value: string;
  key: string;
  validators: ValidatorFn[];
  constructor(options: {
    value: string,
    key: string
    validators: ValidatorFn[];
  }) {
    this.value = options.value;
    this.key = options.key;
    this.validators = options.validators;
  }
}