import {Injectable} from "@angular/core";
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

  private readonly URL = "http://localhost:8080/bike-shop/users";

  constructor(private http : HttpClient){}

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

}
