import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/do';

export class LoggingInterceptor implements HttpInterceptor{


  //handle the request and response
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("intercept in the response");

    return next.handle(req).do(

      response => {
        console.log("logging interceptor", response);
      }

    )

  }



}
