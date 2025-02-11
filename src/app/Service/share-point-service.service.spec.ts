import { TestBed } from '@angular/core/testing';

import { SharePointServiceService } from './share-point-service.service';

describe('SharePointServiceService', () => {
  let service: SharePointServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharePointServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
