import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {MatSidenav} from '@angular/material';
import {NavigationService} from '../navigation-service/navigation.service';

@Component({
  selector: 'application-layout',
  templateUrl: './application-layout.component.html',
  styleUrls: ['./application-layout.component.scss']
})
export class ApplicationLayoutComponent implements OnInit, OnDestroy {

  private westSidenavSubscription: Subscription;

  private eastSidenavSubscription: Subscription;

  private hasBackDrop: boolean;

  @ViewChild('westSidenav') public westSidenav: MatSidenav;

  @ViewChild('eastSidenav') public eastSidenav: MatSidenav;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.hasBackDrop = false;

    this.westSidenavSubscription = this.navigationService.observeWestNavigation().subscribe(() => {
      this.hasBackDrop = true;
      this.westSidenav.toggle();
    });

    this.eastSidenavSubscription = this.navigationService.observeEastNavigation().subscribe(() => {
      this.hasBackDrop = false;
      this.eastSidenav.toggle();
    });
  }

  ngOnDestroy() {
    this.westSidenavSubscription.unsubscribe();
    this.eastSidenavSubscription.unsubscribe();
  }

  closeWestSideNav() {
    this.westSidenav.close();
  }

  closeEastSideNav() {
    this.eastSidenav.close();
  }
}

