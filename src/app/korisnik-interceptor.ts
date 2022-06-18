import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpKorisnikInterceptor implements HttpInterceptor {
  constructor(){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      //Authorization: `${localStorage.getItem('idOsoba')}`,
      Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : ''
    });
    const authReq = request.clone({headers});
    return next.handle(authReq);
  }
}
