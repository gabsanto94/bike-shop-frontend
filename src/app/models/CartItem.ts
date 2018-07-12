import {Product} from './Product';
import {Cart} from './Cart';

export interface CartItem{

  cartItemId: number;
  quantity: number;
  totalPrice: number;

  product: Product;
  cart: Cart;

}
