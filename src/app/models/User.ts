import {ShippingAddress} from './ShippingAddress';
import {BillingAddress} from './BillingAddress';

export interface User {

  userId: number;
  username: string;
  password: string;
  fname: string;
  lname: string;
  userRole: string;
  email: string;

  billAddress : BillingAddress;
  shipAddress : ShippingAddress;


}
