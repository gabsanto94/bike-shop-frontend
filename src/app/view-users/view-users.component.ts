import {Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {User} from "../models/User";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
  providers: [UserService]
})
export class ViewUsersComponent implements OnInit {

  public users : User[];

  constructor(private userService : UserService,
              private router : Router) {


    console.log("im in constructor");
  }

  ngOnInit() {
    console.log("im in ngoninit");
    this.userService.getUsers().subscribe(data => {this.users = data; console.log(data)})

  }

}

