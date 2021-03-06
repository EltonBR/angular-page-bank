import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './create-account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomInputModule } from '../../components/custom-input/custom-input.module';
import { FormMsgValidatorModule } from '../../components/form-msg-validator/form-msg-validator.module';

@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    CustomInputModule,
    FormMsgValidatorModule
  ]
})
export class CreateAccountModule { }
