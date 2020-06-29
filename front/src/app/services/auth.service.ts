import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginBase, UserBase, SignUpBase } from '../../../../shared/typings';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(login: LoginBase) {
    return this.http.post<UserBase>(environment.api + 'auth/login', login);
  }

  signUp(user: SignUpBase) {
    return this.http.post<string>(environment.api + 'auth/sign-up', user);
  }

}
