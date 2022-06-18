import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"createUser", component: UserComponent},
  {path:"login", component: LoginComponent},
  {path:"createBook", component: BookComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule,
  CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
