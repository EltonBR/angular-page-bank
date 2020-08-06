import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import ILogin from '../../types/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseUrl;
  options = {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json'
    }
  };
  constructor(private http: HttpClient) { }

  login(login: ILogin): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, login, this.options);
  }

}


