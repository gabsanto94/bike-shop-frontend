import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    //if you need a service for this put it here.
    private router: Router
  ) { }

  ngOnInit() {


  }

  logMeOut(){
    console.log("delete my key and send me back to home page.");
  }

}
