import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../navigation-service/navigation.service';

@Component({
  selector: 'application-header',
  templateUrl: './application-header.component.html',
  styleUrls: ['./application-header.component.scss']
})
export class ApplicationHeaderComponent implements OnInit {

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
  }

  openWestSideNav() {
     this.navigationService.toggleWestNavbar(true);
  }

  openEastSideNav() {
    this.navigationService.toggleEastNavbar(true);
  }

}
