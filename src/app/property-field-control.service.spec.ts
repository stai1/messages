import { TestBed } from '@angular/core/testing';

import { PropertyFieldControlService } from './property-field-control.service';

describe('PropertyFieldControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropertyFieldControlService = TestBed.get(PropertyFieldControlService);
    expect(service).toBeTruthy();
  });
});
