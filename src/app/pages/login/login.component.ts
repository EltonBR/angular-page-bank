import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { FormHelperService } from '../../services/form-helper.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import ILogin from '../../types/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faSpinner = faSpinner;
  loadingLogin = false;

  loginData: ILogin;
  loginForm: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private http: LoginService,
    private formHelper: FormHelperService
  ) {
    this.loginForm = this.fBuilder.group({
      agency: ['', Validators.required],
      account: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login(): void {

    this.loadingLogin = true;
    this.loginData = {
      agency: this.loginForm.value.agency,
      account: this.loginForm.value.account,
    };

    this.http.login(this.loginData).subscribe((response) => {
      this.loginForm.reset();
      this.formHelper.AllUntouched(this.loginForm);

      this.loadingLogin = false;
      alert('Login success');

    }, (err) => {
      this.loadingLogin = false;
      console.log(err);
    });
  }

}
