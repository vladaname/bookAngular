import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ControllersService {

  constructor(
    private http: HttpClient) { }

public registration(user){
  return this.http.post("http://localhost:8080/createKorisnik", user, {responseType: 'text' as 'json'});
}
public login(user){
  return this.http.post("http://localhost:8080/login", user, {responseType: 'text' as 'json'} );
}
public createBook(book){
  return this.http.post("http://localhost:8080/createBook", book);
}

}

