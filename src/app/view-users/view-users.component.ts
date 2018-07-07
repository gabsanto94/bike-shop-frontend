import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {User} from "../models/User";
import {UserService} from "../services/user.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
  providers: [UserService]
})
export class ViewUsersComponent implements OnInit {

  public users : User[];

  constructor(private userService : UserService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(data => {this.users = data; console.log(data)})

    //this.http.get('http://localhost:8080/bike-shop/users').subscribe(data => console.log(data));
  }

}

