import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthLoginDto } from '../dto/login.dto';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddQuoteService {
  constructor(
    private httpClient: HttpClient
    ) { }

  url = 'http://localhost:3000/auth';

  postAuth(date: AuthLoginDto): any {
    return this.httpClient.post<AuthLoginDto[]>(`${this.url}/login`, date, {withCredentials: true});
  }
}
