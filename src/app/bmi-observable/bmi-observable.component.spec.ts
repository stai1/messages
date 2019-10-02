import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiObservableComponent } from './bmi-observable.component';

describe('BmiObservableComponent', () => {
  let component: BmiObservableComponent;
  let fixture: ComponentFixture<BmiObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
