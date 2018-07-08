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
import {ViewUsersComponent} from "../view-users/view-users.component";
import {DetailUsersComponent} from "../detail-users/detail-users.component";

//no args redirect to home
const routes = [
{
    path: '', redirectTo: '/home', pathMatch: 'full'},
    {
      path: 'home', component: HomeComponent
    },
    { //admin path
      //path: 'admin/users', component: ViewUsersComponent
      path: 'admin/users', redirectTo: '/admin/users', pathMatch: 'full'
    },
    {
      path: 'admin/users', component: ViewUsersComponent
    }

    //customer path



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
