import {Injectable} from "@angular/core";
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  private readonly URL = "http://localhost:8080/bike-shop/admin/users";

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
  login(username: string, password: string) {
    return this.http.post<any>('/api/authenticate', { username: username, password: password })
        .map(user => {
          
            if (user && user.token) {
                
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        });
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    
}
}

