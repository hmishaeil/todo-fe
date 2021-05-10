import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {some, includes} from 'lodash';

const excludedUrls = ['signup', 'login'];

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(!some(excludedUrls, (urlKeyword) => includes(request.url, urlKeyword))){
      request = request.clone({
        setHeaders:
          { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });

    }

    return next.handle(request);
  }

}
