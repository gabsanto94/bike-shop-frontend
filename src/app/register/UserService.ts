import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/app/models/User';
import {ShippingAddress} from '../models/ShippingAddress';
import {BillingAddress} from '../models/BillingAddress';
import {config} from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${config.Promise}/users`);
  }

  getById(id: number) {
    return this.http.get(`${config.Promise}/users/` + id);
  }

  register(user: User) {
    return this.http.post(`${config.Promise}/users/register`, user);
  }

  update(user: User) {
    return this.http.put(`${config.Promise}/users/` + user.userId, user);
  }

  delete(id: number) {
    return this.http.delete(`${config.Promise}/users/` + id);
    }

    addUser(user:User) {
      return this.http.get(`${config.Promise}/register/` + user);
    }



}

