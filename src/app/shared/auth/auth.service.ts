import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders , HttpResponse} from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class AuthService {
  token: string;
  basicUrl: string;
  constructor(private _http: HttpClient) {
    this.basicUrl = environment.basicUrl;
  }

  // Login API call
  login(credential: any) {
    this.token = btoa(credential.email + ':' + credential.password);
    localStorage.setItem('token', this.token);
    return this._http.post(this.basicUrl + 'login/token', {})
  }

  // Registration API call
  registration(registerData: any) {
    return this._http.post(this.basicUrl + 'registration', registerData)
  }

  // ResetPassword API call
  resetPassword(email: any) {
    return this._http.post(this.basicUrl + 'reset-account', email)
  }

  logout() {
    this.token = null;
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token
    return true;
  }
}
