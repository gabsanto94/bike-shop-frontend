//import the pages from angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


//import the stuff we make. ie the components
//should look like
//import { BookShelfComponent } from 'src/app/book-shelf/book-shelf.component';
//import { the name we give it in its spec} from 'its .component class path
//import { NavBar } from 'src/app/Nav-Bar/Nav-Bar.component';
import { HomeComponent } from 'src/app/home/home.component';

const routes = [
{
    //no args redirect to home
    path: '',
    redirectTo: '/hello',
    pathMatch: 'full'
},
{
    //path to home page that loads in the home componenet component
    path: 'hello',
    component: HomeComponent

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