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
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {

  cartItems: CartItem[];
  cart: Cart;
  user: User;



  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    this.cartService.getCartItems(this.user.userId).subscribe();
  }

  removeItemFromCart(id:number): void {
    this.cartService.delete(this.cart);
  }

  getTotalPrice(cartItem: CartItem){
    let grandTotal: number = 0;

    for( let i = 0; i <= cartItem.quantity; i++){
      grandTotal += cartItem.product.price;
    }
    return grandTotal.toString();
  }
}
