import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  Title = 'B2E S2P';
  constructor(
    //if you need a service for this put it here.
  ) { }

  ngOnInit() {
  }

goViewProducts(){
  console.log("this is where you put the  this.router.navigate(['/viewProducts'])")
}
}
