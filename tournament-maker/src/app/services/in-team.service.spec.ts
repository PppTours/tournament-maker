import { TestBed } from '@angular/core/testing';

import { InTeamService } from './in-team.service';

describe('InTeamService', () => {
  let service: InTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
