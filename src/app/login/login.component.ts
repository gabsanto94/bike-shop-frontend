import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
    this.loggedIn = false;
  }
  public title = "TMAG";
  public username: string;
  public password: string;
  public loggedIn: boolean;

  public loginGroup: FormGroup;
  public logoutGroup: FormGroup;

  public buildForm() {
      this.loginGroup = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });

      this.logoutGroup = this.formBuilder.group({});
    }

  public onSubmit() {
    if (this.loginGroup.invalid) {
      return;
    }
    this.username = this.loginGroup.value.username;
    this.password = this.loginGroup.value.password;
    this.loggedIn = true;
    console.log(this.username + " " + this.password);
  }

  public onLogout() {
    this.username = '';
    this.password = '';
    this.loggedIn = false;
    this.buildForm();
  }

}

