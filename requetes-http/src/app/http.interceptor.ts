import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ReqInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    handler: HttpHandler
  ): Observable<HttpEvent<any>> {
    const reqClone = req.clone({
      headers: req.headers.append('Authorization', 'Bearer 12345'),
    });
    return handler.handle(reqClone);
  }

  constructor() {}
}
