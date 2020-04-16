import { TestBed } from '@angular/core/testing';

import { ApplicationSchemaService } from './application-schema.service';

describe('ApplicationSchemaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationSchemaService = TestBed.get(ApplicationSchemaService);
    expect(service).toBeTruthy();
  });
});
