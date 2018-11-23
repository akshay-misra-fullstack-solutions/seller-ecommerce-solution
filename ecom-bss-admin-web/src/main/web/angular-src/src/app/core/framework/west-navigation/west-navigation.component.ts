import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/index";
import {faBoxOpen, faShoppingCart, faMoneyBillWaveAlt, faTruckLoading, faUserFriends} from '@fortawesome/free-solid-svg-icons';

import {JwtHelperService} from "@auth0/angular-jwt";
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-west-navigation',
  templateUrl: './west-navigation.component.html',
  styleUrls: ['./west-navigation.component.scss']
})
export class WestNavigationComponent implements OnInit {
  private authSubscription: Subscription;
  private routeAuthSubscription: Subscription;

  faBoxOpen = faBoxOpen;
  faShoppingCart = faShoppingCart;
  faMoneyBillWaveAlt = faMoneyBillWaveAlt;
  faTruckLoading = faTruckLoading;
  faUserFriends = faUserFriends;

  private components: {name, icon, route}[] =
    [{name:'Products', icon: this.faBoxOpen, route: '/'},
    {name: 'Orders', icon: this.faShoppingCart, route: '/orders'},
    {name: 'Billing', icon: this.faMoneyBillWaveAlt, route: '/billing'},
    {name: 'Delivery', icon: this.faTruckLoading, route: '/delivery'},
    {name: 'Customers', icon: this.faUserFriends, route: '/customers'}];

  private activeComponent: string;

  constructor(private userService: UserService,
              private  jwtHelper: JwtHelperService) { }

  authenticated = false;
  routeAuthenticated = false;

  ngOnInit() {
    console.log("WestNavigationComponent, ngOnInit ...");
    this.activeComponent = this.components[0].name;
    if (this.jwtHelper.isTokenExpired()) {
      this.authenticated = false;
    }else {
      this.authenticated = true;
    }

    this.authSubscription = this.userService.getAuth().subscribe(authenticated => {
      this.authenticated = authenticated;
    });

    this.routeAuthSubscription = this.userService.getRouteAuth().subscribe(routeAuthenticated => {
      console.log("HeaderComponent, routeAuthSubscription, routeAuthenticated:   "+routeAuthenticated);
      this.routeAuthenticated = routeAuthenticated;
      if (routeAuthenticated == false) {
        this.authenticated = false;
      } else if(!this.jwtHelper.isTokenExpired()) {
        this.authenticated = true;
      }
    });
  }

  selectComponent(event, selectedComponent) {
      console.log(selectedComponent);
      this.activeComponent = selectedComponent;
    }


  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.routeAuthSubscription.unsubscribe();
  }

}
