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
  

goViewProducts(){
  console.log("this is where you put the  this.router.navigate(['/viewProducts'])");
}

goViewUsers(){

}

}
