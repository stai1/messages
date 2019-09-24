import { TestBed } from '@angular/core/testing';

import { PropertyFieldService } from './property-field.service';

describe('PropertyFieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropertyFieldService = TestBed.get(PropertyFieldService);
    expect(service).toBeTruthy();
  });
});
