//import the pages from angular
import { NgModule } from '@angular/core';

import {Router, RouterModule, Routes} from '@angular/router';

import { HomeComponent } from 'src/app/home/home.component';
import { ProductViewComponent } from 'src/app/product-view/product-view.component';
import { ProductViewIndividualComponent } from 'src/app/product-view-individual/product-view-individual.component';
import {ViewUsersComponent} from "../view-users/view-users.component";
import { LoginComponent } from '../login/login.component';
import {RegisterComponent} from '../register/register.component'
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
    {
      path: 'product/:id', component:ProductViewIndividualComponent
    },
    { //admin path
      //path: 'admin/users', component: ViewUsersComponent
      path: 'admin/users', redirectTo: '/admin/users', pathMatch: 'full'
    },
    {
      path: 'admin/users', component: ViewUsersComponent
>>>>>>> ProductPage
    },

    //customer path
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent},
      { path: 'profile', component: RegisterComponent},//product
      { path: 'admin/users', component: ViewUsersComponent},//manageUsers
      { path: 'cart', component: RegisterComponent},//Cart
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
