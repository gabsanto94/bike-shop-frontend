import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/map';
import {Product} from "../models/Product";
import {ProductService} from "../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-view-individual',
  templateUrl: './product-view-individual.component.html',
  styleUrls: ['./product-view-individual.component.css'],
  providers: [ProductService]
})
export class ProductViewIndividualComponent implements OnInit {

  @Input() openProduct: Product;
  //this is for the button to edit products
  public isClicked: boolean = false;
  public adminVar = localStorage.getItem("role");
  public isCreateClicked: boolean = false;
  public idprod = 0;
  //variables for updateing
  name: '';
  manufacturer: '';
  category: '';
  description: '';
  price: 0;
  status: '';
  inStock: 0;
  //variables for creating a new one
  nameCreate: '';
  manufacturerCreate: '';
  categoryCreate: '';
  descriptionCreate: '';
  priceCreate: 0;
  statusCreate: '';
  inStockCreate: 0;

  //if this breaks look here
  public product : Product;

  constructor(private productService : ProductService,
    private router : Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idprod = id;
    console.log("next is role, please be");
    console.log(this.adminVar);
    console.log("above this please be");
    console.log(id);
    console.log("individual product view constructor");
    if(id) {
      this.productService.getProduct(id).subscribe(
          Product => this.openProduct = Product);
    }
  }

  editProduct() : void{
    if (this.isClicked===true){
      this.isClicked=false;
      return;
    }
    this.isClicked=true;
//this turns the button sumbission on and off
  }
  //this toggles the create product field
  createProduct(): void{
    if (this.isCreateClicked===true){
      this.isCreateClicked=false;
      return;
    }
    this.isCreateClicked=true;
  }

  submitProduct() :void {
    console.log("in the product submit button")
    //console.log(this.idprod);
    //console.log(this.name);
    //console.log(this.manufacturer);
    const product = {productId: this.idprod, name: this.name, manufacturer: this.manufacturer, category: this.category, description: this.description, price: this.price, status: this.status, inStock: this.inStock};
      console.log(product)
    //update the product
   this.productService.update(product).subscribe();
  }

  deleteProduct(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("in delete button");
    console.log(id);
    this.productService.delete(id).subscribe();
  }

  addTheProduct() :void {
    console.log("in the product submit button")
    //console.log(this.idprod);
    //console.log(this.name);
    //console.log(this.manufacturer);
    const product = {productId: 0, name: this.nameCreate, manufacturer: this.manufacturerCreate, category: this.categoryCreate, description: this.descriptionCreate, price: this.priceCreate, status: this.statusCreate, inStock: this.inStockCreate};
      console.log(product)
    //update the product
   this.productService.addProduct(product).subscribe();
  }



}
