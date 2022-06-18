import { ControllersService } from './../controllers.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User();
  message: string;

  constructor(
    private service: ControllersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public registerNow(){
    const reg = this.service.registration(this.user);
    reg.subscribe((data: any) => this.message = data);
    console.log(this.user);
    if(this.user === this.user){
      this.router.navigate(['/login']);
    }
  }

}
