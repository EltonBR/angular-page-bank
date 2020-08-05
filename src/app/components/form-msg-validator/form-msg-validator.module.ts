import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormMsgValidatorComponent } from './form-msg-validator.component';



@NgModule({
  declarations: [FormMsgValidatorComponent],
  imports: [
    CommonModule
  ], exports: [FormMsgValidatorComponent]
})
export class FormMsgValidatorModule { }
