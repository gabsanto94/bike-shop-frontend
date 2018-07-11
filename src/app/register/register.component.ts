import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/User';
import {BillingAddress} from '../models/BillingAddress';
import {ShippingAddress} from '../models/ShippingAddress';
import {FormBuilder, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [FormBuilder]
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

  constructor() {
  }

  onSubmit() {
    //if (this.myForm.valid) {
    console.log("Form Submitted!");

    const user : User = {userId: 1, fname: this.fname,
      lname: this.lname, username: this.username,
      password: this.password, email: this.email, userRole:''};

    const shipping: ShippingAddress = { streetName: this.shipStreetName, city: this.shipCity,
      state: this.shipState, zip: this.shipZip
    }

    const billing: BillingAddress = { streetName: this.billStreetName, city: this.billCity,
    state: this.billState, zip: this.billZip
    }
    //this.u.lname = "possum";
    console.log(user);
    console.log(shipping);
    console.log(billing);
    //console.log(this.myForm.value);
  }
  //}
  //private createForm(model: User): FormGroup {
  //return this.fb.group(model);
  // }
  // private updateForm(model: Partial<User>): void {
  // this.myForm.patchValue(model)
  //}


  // onSubmit() {
  // console.log(this.myForm.value);
  // }
  // private fb: FormBuilder
}
