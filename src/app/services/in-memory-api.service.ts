import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import ILogin from '../types/login';

@Injectable({
  providedIn: 'root'
})
export class InMemoryApiService implements InMemoryDbService {
  logins: ILogin[];
  constructor() { }

  createDb() {
    let accounts = [
      {
        id        : 1,
        name      : '',
        cpf       : '',
        cellphone : '',
        email     : '',
        birthdate : '',
        password  : ''
      }
    ];

    this.logins = [
      {
        'agency': '2020',
        'account': '459820'
      }
    ];  
    return {
      accounts: accounts,
      login: this.logins
    };
  }
}