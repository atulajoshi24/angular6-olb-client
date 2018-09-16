import { TestBed, inject } from '@angular/core/testing';

import { ProductSubscriptionService } from './product-subscription.service';

describe('ProductSubscriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductSubscriptionService]
    });
  });

  it('should be created', inject([ProductSubscriptionService], (service: ProductSubscriptionService) => {
    expect(service).toBeTruthy();
  }));
});
