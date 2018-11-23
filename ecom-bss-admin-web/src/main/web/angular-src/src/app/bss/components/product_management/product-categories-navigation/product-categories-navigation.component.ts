import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-categories-navigation',
  templateUrl: './product-categories-navigation.component.html',
  styleUrls: ['./product-categories-navigation.component.scss']
})
export class ProductCategoriesNavigationComponent implements OnInit {

  activeTab: string;

  constructor() { }

  ngOnInit() {
    this.activeTab = "womenWear";
  }
  
  activateTab(tabName: string) {
    this.activeTab = tabName;
  }
}
