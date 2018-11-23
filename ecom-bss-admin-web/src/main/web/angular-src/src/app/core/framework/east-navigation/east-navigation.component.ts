import { Component, OnInit } from '@angular/core';
import {faPlusSquare, faShoppingCart, faMoneyBillWaveAlt, faUserFriends, faCopy, faMoneyCheck, faToggleOn} from '@fortawesome/free-solid-svg-icons';

import {JwtHelperService} from "@auth0/angular-jwt";
import { UserService } from '../services/user.service';
import {Subscription} from "rxjs/index";


@Component({
  selector: 'app-east-navigation',
  templateUrl: './east-navigation.component.html',
  styleUrls: ['./east-navigation.component.scss']
})
export class EastNavigationComponent implements OnInit {

  private authSubscription: Subscription;
  private routeAuthSubscription: Subscription;

  faPlusSquare = faPlusSquare;
  faShoppingCart = faShoppingCart;
  faMoneyBillWaveAlt = faMoneyBillWaveAlt;
  faMoneyCheck =faMoneyCheck;
  faToggleOn = faToggleOn;
  faUserFriends = faUserFriends;
  faCopy = faCopy;

  private operations: {name, icon}[] =
    [{name:'New Product', icon: this.faPlusSquare},
      {name: 'Copy Product', icon: this.faCopy},
      {name: 'Add Discounts', icon: this.faMoneyCheck},
      {name: 'Add Prices', icon: this.faMoneyBillWaveAlt},
      {name: 'Launch Product', icon: this.faToggleOn}];

  constructor(private userService: UserService,
              private  jwtHelper: JwtHelperService) { }

  authenticated = false;
  routeAuthenticated = false;

  ngOnInit() {
    if (this.jwtHelper.isTokenExpired()) {
      this.authenticated = false;
    }else {
      this.authenticated = true;
    }

    this.authSubscription = this.userService.getAuth().subscribe(authenticated => {
      this.authenticated = authenticated;
    });

    this.routeAuthSubscription = this.userService.getRouteAuth().subscribe(routeAuthenticated => {
      this.routeAuthenticated = routeAuthenticated;
      if (routeAuthenticated == false) {
        this.authenticated = false;
      } else if(!this.jwtHelper.isTokenExpired()) {
        this.authenticated = true;
      }
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.routeAuthSubscription.unsubscribe();
  }
}
