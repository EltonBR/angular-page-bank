import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryApiService implements InMemoryDbService {

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

    let logins = [
      {
        'id': 1,
        'agency': '2020',
        'account': '459820'
      }
    ];  
    return {
      accounts: accounts,
      login: logins
    };
  }
}