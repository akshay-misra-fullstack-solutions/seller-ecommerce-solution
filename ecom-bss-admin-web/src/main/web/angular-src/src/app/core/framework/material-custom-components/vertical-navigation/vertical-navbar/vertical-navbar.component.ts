import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.scss']
})
export class VerticalNavbarComponent implements OnInit {

  @Output() close = new EventEmitter();

  private tabs = [] = [
    {
      id: '100',
      name: 'Electronics',
      dummy: true,
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
      dummy: true,
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
      id: '114',
      name: 'Clothing',
      dummy: true,
      items: [
        {
          id: '115',
          name: 'Kids Wear',
          parent: 114
        },
        {
          id: '116',
          name: 'Women Wear',
          parent: 114,
          dummy: true,
          items: [
            {
              id: '117',
              name: 'Tops',
              parent: 116
            },
            {
              id: '118',
              name: 'Bottoms',
              parent: 116
            }
          ]
        },
        {
          id: '106',
          name: 'Menz Wear',
          parent: 114
        }
      ]
    },

    {
      id: '125',
      name: 'iPhone',
      dummy: true,
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

    constructor() {
    }

    ngOnInit() {
    }

 /* close() {
      this.close.emit();
  }*/
}
