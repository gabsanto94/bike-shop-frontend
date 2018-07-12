import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ViewUsersComponent} from "./view-users/view-users.component";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {RegisterComponent} from "./register/register.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing/app-routing.module';
import { DetailUsersComponent } from './detail-users/detail-users.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthInterceptor} from "./utils/auth.interceptor";
import {LoggingInterceptor} from "./utils/logging.interceptor";
import {UserService} from "./services/user.service";
import {ProductViewComponent} from "./product-view/product-view.component";
import {CartComponent} from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewUsersComponent,
    RegisterComponent,
    NavBarComponent,
    HomeComponent,
    DetailUsersComponent,
    LoginComponent,
    ProductViewComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [//make angular aware of the interceptors
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
