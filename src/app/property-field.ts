export class PropertyField {
  value: string;
  key: string;
  constructor(options: {
    value: string,
    key: string
  }) {
    this.value = options.value;
    this.key = options.key;
  }
}