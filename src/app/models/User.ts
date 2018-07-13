import {ShippingAddress} from './ShippingAddress';
import {BillingAddress} from './BillingAddress';
import {Cart} from "./Cart";

export interface User {

  userId: number;
  username: string;
  password: string;
  fname: string;
  lname: string;
  userRole: string;
  email: string;

  billingAddress : BillingAddress;
  shippingAddress : ShippingAddress;

  cart : Cart;


}
