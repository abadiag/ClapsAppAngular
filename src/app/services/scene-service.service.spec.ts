import { TestBed } from '@angular/core/testing';

import { SceneServiceService } from './scene-service.service';

describe('SceneServiceService', () => {
  let service: SceneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SceneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
