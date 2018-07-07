import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //need router in the constructor
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log("hi");
  }

}
