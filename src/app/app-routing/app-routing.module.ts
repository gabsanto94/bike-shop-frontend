//import the pages from angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';



//import the stuff we make. ie the components
//should look like
//import { BookShelfComponent } from 'src/app/book-shelf/book-shelf.component';
//import { the name we give it in its spec} from 'its .component class path
//import { NavBar } from 'src/app/Nav-Bar/Nav-Bar.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ProductViewComponent } from 'src/app/product-view/product-view.component';
import { ProductViewIndividualComponent } from 'src/app/product-view-individual/product-view-individual.component';
import {ViewUsersComponent} from "../view-users/view-users.component";
import {DetailUsersComponent} from "../detail-users/detail-users.component";
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
      path: 'product', component:ProductViewComponent
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
    },

    //customer path
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent},
      { path: '', component: RegisterComponent},//product
      { path: 'manageuser', component: ViewUsersComponent},//manageUsers
      { path: '', component: RegisterComponent},//Cart
       {
         path: 'logout', component: LoginComponent
       }, 
  
      
      


    /*{
      path: '/products', redirectTo: '/products', pathMatch: 'full'},
    {
      path: 'products', component: ****COMPONENT FOR PRODUCTS****
    }*/


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
