import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class NavigationService {

  public westSideNavToggleSubject = new Subject<boolean>();

  public eastSideNavToggleSubject = new Subject<boolean>();

  constructor() { }

  public toggleWestNavbar(toggle: boolean) {
    return this.westSideNavToggleSubject.next(toggle);
  }

  public observeWestNavigation(): Observable<boolean> {
    return this.westSideNavToggleSubject.asObservable();
  }

  public toggleEastNavbar(toggle: boolean) {
    return this.eastSideNavToggleSubject.next(toggle);
  }

  public observeEastNavigation(): Observable<boolean> {
    return this.eastSideNavToggleSubject.asObservable();
  }

}
