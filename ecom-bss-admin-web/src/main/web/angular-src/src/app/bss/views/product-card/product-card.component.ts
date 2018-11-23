import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../components/product_management/models/product";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() cardProduct: Product;

  flip: boolean;

  constructor() { }

  ngOnInit() {
  }

  flipCard() {
    if (this.flip) {
       this.flip = false;
    } else {
      this.flip = true;
    }
  }
}
