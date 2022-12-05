import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  // intercept(req, next){  
  let userToken = JSON.parse(localStorage.getItem('token') || '{}');
    console.log("TOKEN",userToken);
    
    //const userToken = 'secure-user-token';
    const modifiedReq = req.clone({ 
      setHeaders: {
        Authorization: `Bearer ${userToken}`
      }
    });
    //console.log("16 interceptor",modifiedReq.headers,req.headers);
    return next.handle(modifiedReq);
  }
}
