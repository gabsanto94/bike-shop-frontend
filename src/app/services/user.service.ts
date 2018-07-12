import {Injectable} from "@angular/core";
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

@Injectable()
export class UserService {

  private readonly URL = "http://localhost:8080/bike-shop/admin/users";

  constructor(private http : HttpClient,
              private router : Router){}

  getUsers(){
    return this.http.get<User[]>(this.URL);
  }

  getUser(id : number){
    return this.http.get<User>(this.URL + "/" + id);
  }

  update(user : User) : Observable<User>{
    return this.http.put<User>(`${this.URL}/${user.userId}`, user);
  }

  delete(user : User) : Observable<User>{
    return this.http.delete<User>(`${this.URL}/${user.userId}`);
  }

  //add the user here
  addUser(user:User) : Observable<User> {
    console.log(user);
    return this.http.post<User>("http://localhost:8080/bike-shop/register/", user);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  setToken(myToken : string){
    localStorage.setItem("token", myToken);
  }

  login(username : string, password: string){
    return this.http.post<any>('http://localhost:8080/bike-shop/login', { user: username, pass: password });
  }
}

