
export class User {

  private username : string;
  private password : string;
  private fName : string;
  private lName : string;
  private userRole : string;
  private email : string;

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


}
