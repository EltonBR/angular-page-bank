import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import ICreateAccount from '../../types/create-account';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {
  baseUrl = environment.baseUrl;
  options = {
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    }
  };
  constructor(private http: HttpClient) { }

  createAccount(account: ICreateAccount): Observable<any> {
    return this.http.post(`${this.baseUrl}/accounts`, account, this.options);
  }

}
