import {Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {User} from "../models/User";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
  providers: [UserService]
})
export class ViewUsersComponent implements OnInit {

  public users : User[];

  constructor(private userService : UserService) {


    console.log("im in constructor");
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {this.users = data; console.log(data)})

  }

}

