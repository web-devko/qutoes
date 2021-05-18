import { TestBed } from '@angular/core/testing';

import { HttpGetQuoteService } from './http-get-quote.service';

describe('HttpGetQuoteService', () => {
  let service: HttpGetQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGetQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
