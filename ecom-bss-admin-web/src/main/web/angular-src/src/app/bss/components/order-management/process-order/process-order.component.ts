import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss']
})
export class ProcessOrderComponent implements OnInit {

  tabs: string[] = ['address', 'del-method', 'ord-review', 'payment'];
  visitedTabs: string[] = [this.tabs[0]];
  tab: string ;
  back: string = 'Back to cart';
  next: string = 'Next';

  constructor(private router: Router) { }

  ngOnInit() {
    this.tab = this.tabs[0];
  }

  selectTab(tab) {
    if (this.visitedTabs.indexOf(tab) > -1) {
      this.tab = tab;
    }
  }

  onNext() {
    if (this.tabs.length == this.tabs.indexOf(this.tab) + 1) {
      this.router.navigate(['/order/success']);
    } else {
      this.tab = this.tabs[this.tabs.indexOf(this.tab) + 1];
      this.visitedTabs.push(this.tab);
      this.back = 'Back';
      if (this.tabs.length == this.tabs.indexOf(this.tab) + 1) {
        this.next = 'Place an order';
      }
    }
  }

  onBack() {
    if (this.tabs.indexOf(this.tab) == 0) {
      this.router.navigate(['/products/cart']);
    } else {
      this.tab = this.tabs[this.tabs.indexOf(this.tab) - 1];
      this.next = 'Next';
      if (this.tabs.indexOf(this.tab) == 0) {
        this.back = 'Back to cart';
      }
    }
  }


}
