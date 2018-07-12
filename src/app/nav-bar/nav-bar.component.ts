import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public userLoggedIn = true;

  constructor(
    //if you need a service for this put it here.
    private router: Router
  ) { }

  ngOnInit() {


  }

  isActive(){
    let status = localStorage.getItem("isLoggedIn");

    if(status === "true"){
      this.userLoggedIn = false;
      return true;
    } else{
      return false;
    }
  }

  checkAdminRole(){
    let currentRole = localStorage.getItem('role');

    if(currentRole === "admin"){
      return true;
    }
    else{
      return false;
    }

  }

  logMeOut(){
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    this.router.navigate(['login']);
  }

}
