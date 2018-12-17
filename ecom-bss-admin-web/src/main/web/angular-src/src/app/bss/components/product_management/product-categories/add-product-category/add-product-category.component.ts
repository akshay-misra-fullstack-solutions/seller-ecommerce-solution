import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-category',
  templateUrl: './add-product-category.component.html',
  styleUrls: ['./add-product-category.component.scss']
})
export class AddProductCategoryComponent implements OnInit {

  private activeTab: string;

  constructor() { }

  ngOnInit() {
    this.activeTab = 'general';
  }

  selectTab(event, tabClicked) {
    console.log(tabClicked);
    this.activeTab = tabClicked;
  }

}
