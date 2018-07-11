import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ViewUsersComponent} from "./view-users/view-users.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RegisterComponent} from "./register/register.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {HomeComponent} from "./home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from './app-routing/app-routing.module';
import { DetailUsersComponent } from './detail-users/detail-users.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
<<<<<<< HEAD
=======
import { ProductViewComponent } from './product-view/product-view.component';
>>>>>>> ViewProductAngular


@NgModule({
  declarations: [
    AppComponent,
    ViewUsersComponent,
    RegisterComponent,
    NavBarComponent,
    HomeComponent,
    DetailUsersComponent,
    LoginComponent
=======
    LoginComponent,
    ProductViewComponent
>>>>>>> ViewProductAngular
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
