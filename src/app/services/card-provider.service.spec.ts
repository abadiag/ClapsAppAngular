import { TestBed } from '@angular/core/testing';

import { CardProviderService } from './card-provider.service';

describe('CardProviderService', () => {
  let service: CardProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
