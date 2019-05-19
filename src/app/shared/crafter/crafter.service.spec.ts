import { TestBed } from '@angular/core/testing';

import { CrafterService } from './crafter.service';

describe('CrafterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrafterService = TestBed.get(CrafterService);
    expect(service).toBeTruthy();
  });
});
