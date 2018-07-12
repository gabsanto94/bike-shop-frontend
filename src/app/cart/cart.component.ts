import { Component, OnInit } from '@angular/core';

import {Product} from '../models/Product';
import {ProductService} from '../services/product.service';

import {CartItem} from '../models/CartItem';
import {CartService} from '../services/cart.service';
import {Cart} from '../models/Cart';
import {User} from '../models/User';
import {Observable} from 'rxjs';

@Component({
  selector: 'cart-app',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[];
  cart: Cart;
  user: User;



  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    //this.cartService.getCartItems(userId).subscribe();
  }

  removeItemFromCart(id:number): void {
    this.cartService.delete(this.cart);
  }
}
//this.cartService.getCart(this.user.userId)
//this.retrieveCart();
