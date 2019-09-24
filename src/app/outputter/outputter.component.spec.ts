import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputterComponent } from './outputter.component';

describe('OutputterComponent', () => {
  let component: OutputterComponent;
  let fixture: ComponentFixture<OutputterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
