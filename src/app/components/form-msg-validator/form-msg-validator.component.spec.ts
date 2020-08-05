import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMsgValidatorComponent } from './form-msg-validator.component';

describe('FormMsgValidatorComponent', () => {
  let component: FormMsgValidatorComponent;
  let fixture: ComponentFixture<FormMsgValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMsgValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMsgValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
