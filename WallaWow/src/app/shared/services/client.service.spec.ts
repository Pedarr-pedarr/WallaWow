import { TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';

describe('ServiceClientService', () => {
  let service: ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
