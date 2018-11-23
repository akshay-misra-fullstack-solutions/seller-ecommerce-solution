import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  private product : Product;
  faArrowAltCircleUp = faArrowAltCircleUp;

  categories = ['Electronics', 'Home', 'Kitchen', 'Pantry', 'Beauty', 'Music', 'Automobile'];

  submitted = false;

  @Output()
  addProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private prodServ: ProductService) { }

  ngOnInit() {
    this.product = {}
  }

  public editProduct(prod: Product) {
    this.product = prod;
  }

  public onSubmit() {
    if(this.product.id) {
      this.prodServ.updateProduct(this.product).subscribe(
        product => {
          if(product) {
            this.product = {}
          }
        },
      );
    } else {
      this.prodServ.addProduct(this.product)
        .subscribe(newProduct => {
          console.log("addProduct response.body:  "+newProduct);
          this.addProduct.emit(newProduct);
          this.product = {}
        });
    }
    this.submitted = true;
  }
}
