import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

const excludedUrls = ['signup', 
                      'login', 
                      'request-reset-password', 
                      'reset-password',
                      'verify-email',
                      'validate-jwt',
                    ];

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (!_.some(excludedUrls, (urlKeyword) => _.includes(request.url, urlKeyword))) {
      request = request.clone({
        setHeaders:
          { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });

    }

    return next.handle(request);
  }

}
