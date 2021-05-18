import { TestBed } from '@angular/core/testing';

import { HttpGetAuthorService } from './http-get-author.service';

describe('HttpGetAuthorService', () => {
  let service: HttpGetAuthorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGetAuthorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
