import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cart} from '../models/Cart';
import {Observable} from 'rxjs';
import {CartItem} from '../models/CartItem';
import {User} from '../models/User';

@Injectable()
export class CartService {

  user: User;

  grandTotal: number;


  private readonly URL = "http://localhost:8080/bike-shop/cart";

  constructor(private http : HttpClient){}

  getCart(userId){
    return this.http.get<Cart[]>(this.URL);
  }

  delete(cart: Cart): Observable<Cart>{
    return this.http.delete<Cart>(`${this.URL}/${cart.cartId}`);
  }

  addToCart(cartItem: CartItem){
    this.http.put(`${this.URL}`, cartItem);

  }

  getCartItems(userID){
    return this.http.get<CartItem[]>(this.URL);
  }




}
