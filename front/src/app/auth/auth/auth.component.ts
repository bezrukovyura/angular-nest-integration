import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  login: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  onLogin() {
    debugger
    this.authService.login({ login: this.login, password: this.password }).subscribe(res => {
      debugger
    });
  }

}
