import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { GlobalService } from './index';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(public global: GlobalService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Basic ' + token,
          'Content-Type': 'application/json'
        }
      });
    }
    return next
    .handle(req)
    .map(resp => {
      if (resp instanceof HttpResponse) {
        return resp;
      }
    })
    .catch(err => {
      let errorData: any;
      if (err instanceof HttpErrorResponse) {
        if (err.error && err.error.message) {
          errorData = err.error.message;
        } else {
          errorData = this.global.somethingWentWrong;
        }
        return Observable.throw(errorData);
      } else {
        return Observable.throw(this.global.somethingWentWrong);
      }
    });
  }
}
