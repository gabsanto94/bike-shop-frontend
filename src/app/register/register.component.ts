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
  /*myForm: FormGroup = this.createForm({
    userId: 0,
    username: '',
    password: '',
    fname: '',
    lname: '',
    userRole: '',
    email: ''
  });
  */

  //get formValue() {
  //return this.myForm.value as User;
  //}

  constructor(private userService : UserService) {
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
