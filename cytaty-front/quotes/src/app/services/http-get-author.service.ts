import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class HttpGetAuthorService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:3000/quotes/authors/';

  getAuthorAfterLetter(letter: string): Observable<Author[]> {
    return this.httpClient.get<Author[]>(this.url + letter);
  }

  getAllAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(this.url + 'all');
  }

}
