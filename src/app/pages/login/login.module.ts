import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomInputModule } from '../../components/custom-input/custom-input.module';
import { FormMsgValidatorModule } from '../../components/form-msg-validator/form-msg-validator.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    CustomInputModule,
    FormMsgValidatorModule,
    RouterModule
  ]
})
export class LoginModule { }
