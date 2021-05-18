import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class HttpGetQuoteService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  url = 'http://localhost:3000/quotes';


  /// get quote from server
  getQuotes(pageNumber: string | null): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>(`${this.url}/${pageNumber}`, {withCredentials: true});
  }

  getQuotesFromTopic(topic: string | null): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>(`${this.url}/topic/${topic}`);
  }

  getQuotesFromAuthor(author: string | null): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>(`${this.url}/author/${author}`);
  }

  getSearch(text: string | null): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>(`${this.url}/find/${text}`);
  }

  getAdvancedSearch(author: string | null, topic: string | null, year: string | null): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>(`${this.url}/advancedFind/${author}/${topic}/${year}`);
  }
}
