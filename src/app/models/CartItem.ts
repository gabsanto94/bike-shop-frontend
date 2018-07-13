import {Product} from './Product';
import {Cart} from './Cart';

export class CartItem{

  cartItemId: number;
  quantity: number;
  totalPrice: number;

  product: Product;
  cart: Cart;

}
