import { Component, OnInit, ViewChild } from '@angular/core';
import {Subscription} from "rxjs/index";
import { JwtHelperService } from '@auth0/angular-jwt';

import {faPencilAlt, faTrashAlt, faToggleOn, faToggleOff} from '@fortawesome/free-solid-svg-icons';

import { ProductService } from '../services/product.service';
import { UserService } from '../../../../core/framework/services/user.service';
import { Product } from '../models/product';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  @ViewChild(AddProductComponent) addProductComp: AddProductComponent;

  private subscription: Subscription;
  private products: Product[] = [];
  loading: boolean;
  switchOn: boolean;

  faPencilAlt = faPencilAlt;
  faTrashAlt  = faTrashAlt;
  faToggleOn = faToggleOn;
  faToggleOff = faToggleOff;

  constructor(private prodServ: ProductService,
              private  userService: UserService,
              private  jwtHelper: JwtHelperService) {
  }

  authenticated = false;

  ngOnInit() {
    console.log("ViewProductComponent, ngOnInit:  switchOn: "+this.switchOn);
    this.userService.authenticateRoute(true);
    if (this.jwtHelper.isTokenExpired()) {
      this.authenticated = false;
    } else {
      this.authenticated = true;
    }

    this.subscription = this.userService.getAuth().subscribe(authenticated => {
      this.authenticated = authenticated;
    });

  	this.loadProducts();
  }

  public loadProducts() {
    this.loading = true;
    //Get all products from server and update the products property
    this.prodServ.getAllProducts().subscribe(
        response => {
          this.products = response;
          this.loading = false;}, )
  }

  public deleteProduct(product: Product) {
    console.log("deleteProduct product.id:  "+product.id);
    this.prodServ.deleteProductById(product.id).subscribe(
      response => this.products = this.products.filter(products => products !== product),)
  }

  public editProduct(product: Product) {
    this.addProductComp.editProduct(product);
  }

  public onAddProduct(product: Product) {
    this.products = this.products.concat(product);
  }

  switch() {
    if (this.switchOn) {
      this.switchOn = false;
    } else {
      this.switchOn = true;
    }
  }
}
