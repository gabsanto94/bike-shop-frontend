//import the pages from angular
import { NgModule } from '@angular/core';

import {Router, RouterModule, Routes} from '@angular/router';

import { HomeComponent } from 'src/app/home/home.component';
import { ProductViewComponent } from 'src/app/product-view/product-view.component';
import {ViewUsersComponent} from "../view-users/view-users.component";
import { LoginComponent } from '../login/login.component';
import {RegisterComponent} from '../register/register.component'
import {ProfileComponent} from "../profile/profile.component";
//no args redirect to home
const routes = [

{
    path: '', redirectTo: '/home', pathMatch: 'full'},
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'products', component:ProductViewComponent
    },

    //customer path
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'admin/users', component: ViewUsersComponent},
      { path: 'cart', component: RegisterComponent},
       {
         path: 'logout', component: LoginComponent
       }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
exports: [
    RouterModule
],
declarations:[]
})
export class AppRoutingModule { }
