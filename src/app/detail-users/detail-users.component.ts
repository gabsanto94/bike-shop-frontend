import {Component, Input, OnInit } from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-detail-users',
  templateUrl: './detail-users.component.html',
  styleUrls: ['./detail-users.component.css'],
  providers: [UserService]
})
export class DetailUsersComponent implements OnInit {

  public isLoaded : boolean;
  public u : User;

  //The activated route holds information about the route to the current
  //instance of the Component.
  //The Location is angular service for interacting with the browser.
  constructor(
    private userService : UserService,
    private route : ActivatedRoute,
    private location : Location
  ) { }

  ngOnInit() {

    //extract the id from the url
    //paramMap is a dictionary of parameters values extracted from the url
    //the route parameters are always strings.
    //need to use the + operator to convert it to a number.
    const id = +this.route.snapshot.paramMap.get('id');

    this.userService.getUser(id).subscribe(data => {this.u = data; console.log(data)});
    this.isLoaded = true;
  }

  goBack() : void{
    this.location.back();
  }

}
