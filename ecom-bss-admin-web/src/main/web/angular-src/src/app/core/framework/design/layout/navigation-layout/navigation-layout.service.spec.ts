import { TestBed } from '@angular/core/testing';

import { NavigationLayoutService } from './navigation-layout.service';

describe('NavigationLayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationLayoutService = TestBed.get(NavigationLayoutService);
    expect(service).toBeTruthy();
  });
});
