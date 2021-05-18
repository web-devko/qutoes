import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthLoginDto } from 'src/app/dto/login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  model: Partial<AuthLoginDto> = {};

  ngOnInit(): void {
  }

  authLogin(): void {
    this.authService.postAuth(this.model as AuthLoginDto)
    .subscribe(() => this.router.navigate(['/']));
  }
}
