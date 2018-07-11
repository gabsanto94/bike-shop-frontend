import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {Product} from "../models/Product";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [ProductService]
})
export class ProductViewComponent implements OnInit {

  public products : Product[];

  constructor(private productService : ProductService,
    private router : Router) { 

    console.log("product view constructor")
  }

  ngOnInit() {
    console.log("product ngonit")
    this.productService.getProducts().subscribe(data => {this.products = data; console.log(data)})
  }

}
