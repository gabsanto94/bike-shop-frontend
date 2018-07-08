import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ViewUsersComponent} from "./view-users/view-users.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RegisterComponent} from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewUsersComponent,
    RegisterComponent,
    ViewUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
