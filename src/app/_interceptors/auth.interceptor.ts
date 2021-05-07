import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SESSION_STORAGE_TOKEN } from '../_constants/app.constant';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url !== "http://localhost:8080/signup") {
      request = request.clone({
        setHeaders:
          { Authorization: 'Bearer ' + sessionStorage.getItem(SESSION_STORAGE_TOKEN) }
      });
    }

    return next.handle(request);
  }

}
