import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {Injectable, Injector} from "@angular/core";
import {UserService} from "../services/user.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{


  constructor(private userService : UserService,
              private injector : Injector){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Intercepted Authorize!', req);

    //let userService = this.injector.get(UserService);

    //request are immutable, so we need to clone then configure
    //set to overide or
    //append to add to the headers
      let tokenRequest = req.clone({
        setHeaders: {
          Authorization: `Basic ${this.userService.getToken()}`
        }
      });

      console.log("NEW REQUEST: ", tokenRequest);

      console.log(tokenRequest.headers);


      return next.handle(tokenRequest);
  }

}
