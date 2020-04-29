import { TestBed } from '@angular/core/testing';

import { ObjectDetailsLayoutService } from './object-details-layout.service';

describe('ObjectDetailsLayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjectDetailsLayoutService = TestBed.get(ObjectDetailsLayoutService);
    expect(service).toBeTruthy();
  });
});
