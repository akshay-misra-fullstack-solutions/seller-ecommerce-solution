import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'horizontal-navbar',
  templateUrl: './horizontal-navbar.component.html',
  styleUrls: ['./horizontal-navbar.component.scss']
})
export class HorizontalNavbarComponent implements OnInit {

  private tabs = [] = [
    {
      id: '100',
      name: 'Electronics',
      items: [
        {
          id: '101',
          name: 'LED Television',
          parent: 100
        },
        {
          id: '102',
          name: 'Refrigerator',
          parent: 100,
          items: [
            {
              id: '103',
              name: 'Whirlpool',
              parent: 102
            },
            {
              id: '104',
              name: 'Samsung',
              parent: 102
            },
            {
              id: '105',
              name: 'Whirlpool',
              parent: 102
            }
          ]
        },
        {
          id: '106',
          name: 'Home Theater',
          parent: 100
        }
      ]
    },

    {
      id: '107',
      name: 'iPhone',
      items: [
        {
          id: '108',
          name: 'iPhone 8',
          parent: 107
        },
        {
          id: '109',
          name: 'iPhone 10',
          parent: 107
        },
        {
          id: '110',
          name: 'iPhone 11',
          parent: 107,
          items: [
            {
              id: '111',
              name: 'iPhone 11 silver',
              parent: 110
            },
            {
              id: '112',
              name: 'iPhone 11 gold',
              parent: 110
            },
            {
              id: '113',
              name: 'iPhone 11 grey',
              parent: 110
            }
          ]
        }
      ]
    },

    {
      id: '100',
      name: 'Electronics',
      items: [
        {
          id: '101',
          name: 'LED Television',
          parent: 100
        },
        {
          id: '102',
          name: 'Refrigerator',
          parent: 100,
          items: [
            {
              id: '103',
              name: 'Whirlpool',
              parent: 102
            },
            {
              id: '104',
              name: 'Samsung',
              parent: 102
            },
            {
              id: '105',
              name: 'Whirlpool',
              parent: 102
            }
          ]
        },
        {
          id: '106',
          name: 'Home Theater',
          parent: 100
        }
      ]
    },

    {
      id: '107',
      name: 'iPhone',
      items: [
        {
          id: '108',
          name: 'iPhone 8',
          parent: 107
        },
        {
          id: '109',
          name: 'iPhone 10',
          parent: 107
        },
        {
          id: '110',
          name: 'iPhone 11',
          parent: 107,
          items: [
            {
              id: '111',
              name: 'iPhone 11 silver',
              parent: 110
            },
            {
              id: '112',
              name: 'iPhone 11 gold',
              parent: 110
            },
            {
              id: '113',
              name: 'iPhone 11 grey',
              parent: 110
            }
          ]
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
