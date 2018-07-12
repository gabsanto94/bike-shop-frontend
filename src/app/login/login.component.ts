import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UserService } from 'src/app/services/user.service';
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router : Router) {
    this.buildForm();
    this.loggedIn = false;
  }
  public title = "TMAG";
  public username: string;
  public password: string;
  public loggedIn: boolean;
  public msg : string;

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
    let myToken = btoa(`${this.username}:${this.password}`);
    //localStorage.setItem("token", myToken);
    this.userService.setToken(myToken);
    this.userService.login(this.username, this.password).subscribe(

      suc => {
        console.log(suc);
        localStorage.setItem('username', this.username);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('userId', suc.principal.userId);
        localStorage.setItem('role', suc.principal.userRole);
        this.router.navigate(['home']);
      },
      err => {
        console.log(err);
        this.msg = "Invalid Password";
      }

    );
  }

  public onLogout() {
    this.username = '';
    this.password = '';
    this.loggedIn = false;
    this.buildForm();
  }

}

