import {CartItem} from './CartItem';
import {User} from './User';

export interface Cart {

  cartId: number;
  quantity: number;
  grandTotal: number;

  cartItem: CartItem[];
  user: User;
}
