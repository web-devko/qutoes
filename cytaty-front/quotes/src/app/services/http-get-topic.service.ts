import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/author';
import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class HttpGetTopicService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:3000/quotes/topics/';

  getTopicsAfterLetter(letter: string): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(this.url + letter);
  }

  getAllTopics(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(this.url + 'all');
  }


}
