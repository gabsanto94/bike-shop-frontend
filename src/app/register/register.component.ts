import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/User';
import {BillingAddress} from '../models/BillingAddress';
import {ShippingAddress} from '../models/ShippingAddress';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [FormBuilder, UserService]
})

export class RegisterComponent {

  //user info
  fname = '';
  lname = '';
  username: '';
  password: '';
  repassword: '';
  email: '';
  //shipping info
  shipStreetName: '';
  shipCity: '';
  shipState: '';
  shipZip: '';
  //billing info
  billStreetName:'';
  billCity:'';
  billState: '';
  billZip:'';


  public u : User;
  public ship: ShippingAddress;
  public bill: BillingAddress;

  constructor(private userService : UserService) {
  }

  sameAddress(){
    //assign previous values to the shipping address

  }

  onSubmit() {
    //if (this.myForm.valid) {
    console.log("Form Submitted!");

    const shipping = { streetName: this.shipStreetName, city: this.shipCity,
      state: this.shipState, zip: this.shipZip
    };

    const bill = { streetName: this.billStreetName, city: this.billCity,
    state: this.billState, zip: this.billZip
    };

    const user = {userId: 0, fname: this.fname,
      lname: this.lname, username: this.username,
      password: this.password, email: this.email, userRole:'customer', billingAddress: bill, shippingAddress: shipping};

    console.log(user);

    this.userService.addUser(user).subscribe();

  }
}
