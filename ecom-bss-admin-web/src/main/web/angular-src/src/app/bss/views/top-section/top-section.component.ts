import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss']
})
export class TopSectionComponent implements OnInit {

  private carousels: {img, title, description}[] =
    [ {img: '../../../assets/images/carousals/c1-unsplash.jpg', title: 'Fashion', description: ''},
      {img: '../../../assets/images/carousals/c2-unsplash.jpg', title: 'Accessories', description: ''},
      {img: '../../../assets/images/carousals/c3-unsplash.jpg', title: 'Laptops', description: ''},
      {img: '../../../assets/images/carousals/c4-unsplash.jpg', title: 'Sports', description: ''},
      {img: '../../../assets/images/carousals/c5-unsplash.jpg', title: 'Sports', description: ''},
      {img: '../../../assets/images/carousals/c6-unsplash.jpg', title: 'Fitness', description: ''},
      {img: '../../../assets/images/carousals/c7-unsplash.jpg', title: 'Sports', description: ''}];

  constructor() { }

  ngOnInit() {
  }

}
