import {Injectable} from "@angular/core";
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/Product";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

    
  private readonly URL = "http://localhost:8080/bike-shop/products";

  constructor(private http : HttpClient){}

  getProducts(){
    return this.http.get<Product[]>(this.URL);
  }

  getProduct(id : number){
    return this.http.get<Product>(this.URL + "/" + id);
  }

  update(product : Product) : Observable<Product>{
    return this.http.put<Product>(`${this.URL}/${product.productId}`, product);
  }

  delete(product : Product) : Observable<Product>{
    return this.http.delete<Product>(`${this.URL}/${product.productId}`);
  }
}