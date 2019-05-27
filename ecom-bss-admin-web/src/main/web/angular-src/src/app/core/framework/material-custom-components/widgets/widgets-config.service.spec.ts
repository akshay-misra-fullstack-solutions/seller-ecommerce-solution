import { TestBed } from '@angular/core/testing';

import { WidgetsConfigService } from './widgets-config.service';

describe('WidgetsConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetsConfigService = TestBed.get(WidgetsConfigService);
    expect(service).toBeTruthy();
  });
});
