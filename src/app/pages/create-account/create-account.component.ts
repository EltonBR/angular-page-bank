import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormHelperService } from './../../services/form-helper.service';
import ICreateAccount from '../../types/create-account';
import { CreateAccountService } from './create-account.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  loadingRegister = false;

  faCalendar = faCalendar;
  faSpinner  = faSpinner;

  registerForm: FormGroup;
  accountData: ICreateAccount;

  constructor(
    private fBuilder: FormBuilder,
    private formHelper: FormHelperService,
    private api: CreateAccountService
  ) {
    this.registerForm = this.fBuilder.group({
      fullName:         ['', Validators.required],
      cpf:              ['', [Validators.required, Validators.minLength(11)]],
      cellphone:        ['', Validators.required],
      email:            ['', [Validators.required, Validators.email]],
      birthdate:        ['', Validators.required],
      password:         ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      confirmPassword:  ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      acceptTerms:      [false, Validators.required],
      acceptNewsletter: [false],
    });
  }

  submitCreateAccount(): void {

    if (this.registerForm.valid === false) {

      window.scrollTo(0, 0);
      this.formHelper.validateAllFormFields(this.registerForm);
      return;
    }

    this.loadingRegister = true;

    const formValue = this.registerForm.value;

    this.accountData = {
      name             : formValue.fullName,
      cpf              : formValue.cpf,
      cellphone        : formValue.cellphone,
      email            : formValue.email,
      birthdate        : formValue.birthdate,
      password         : formValue.password,
      acceptTerms      : formValue.acceptTerms,
      acceptNewsletter : formValue.acceptNewsletter,
    };

    this.api.createAccount(this.accountData).subscribe((response) => {

      this.loadingRegister = false;
      this.registerForm.reset();
      this.formHelper.AllUntouched(this.registerForm);
      console.log(response);
      alert('Conta Criada');

    }, (err) => {
      this.loadingRegister = false;
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
