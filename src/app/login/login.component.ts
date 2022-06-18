import { BookComponent } from './../book/book.component';
import { Component, OnInit } from '@angular/core';
import {Login} from 'src/app/login.model';
import {LoginService} from 'src/app/login.service';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(
    private loginService: LoginService,
    private storageService: LocalStorageService,

    ) { }

  ngOnInit(): void {
  }

  loginSr(){
    console.log("login");
    console.log(this.login.username);
    localStorage.clear();
    this.loginService.logujOsobu(this.login.username, this.login.pass).subscribe(
      res => {
        console.log("uspesno");
        console.log("========");
        console.log(res);
        //console.log(res.korisnik.idOsoba);
        console.log("========");
        localStorage.setItem('token', res.token);

        //localStorage.setItem('korisnik', res.korisnik.idKorisnik);
        this.storageService.roleChanged('korisnik');

        this.storageService.itemsChanged(true);
      },
      err => {
        console.log("neuspesno");
      }
    );
  }

}
