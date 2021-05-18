import { TestBed } from '@angular/core/testing';

import { HttpGetTopicService } from './http-get-topic.service';

describe('HttpGetTopicService', () => {
  let service: HttpGetTopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGetTopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
