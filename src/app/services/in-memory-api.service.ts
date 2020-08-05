import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import IAccount from '../types/create-account';

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
    return {accounts: accounts};
  }
}