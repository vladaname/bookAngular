import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable ({

  providedIn: 'root',
})
  export class LoginService {
  private loginUrl = "http://localhost:8080/login";

  constructor(public http: HttpClient){}

  logujOsobu(username: String, pass: String): Observable<any>{
    return this.http.post(this.loginUrl, {username: username, password: pass});
  }


}
