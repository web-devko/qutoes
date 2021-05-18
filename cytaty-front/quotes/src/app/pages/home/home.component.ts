import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message = '';
  ilustration = '../assets/home-ilustration.svg';
  fire = '../assets/fire.svg';

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.checkIsLoggedIn();
  }

  checkIsLoggedIn(): void {
    this.http.get('http://localhost:3000/user', { withCredentials: true }).subscribe(
      (res: any) => {
        this.message = `Hi`;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    );
  }

}
