import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  userEmail = '';
  userPassword = '';

  constructor(private authService: AuthService, private router: Router, private navbarService: NavbarService) {
    if (this.authService.isLoggedIn) {
      this.router.navigateByUrl('/todo');
    }
  }

  ngOnInit() {
    this.navbarService.hide();
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  tryLogin() {
    this.authService.loginWithEmailAndPassword(this.userEmail, this.userPassword);
  }

  signInWithGoogle() {
    this.authService.loginWithGoogle();
  }
}
