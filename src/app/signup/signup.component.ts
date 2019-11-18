import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  confirmHide = true;
  userEmail = '';
  userPassword = '';
  confirmPassword = '';

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

  clear() {
    this.userEmail = '';
    this.userPassword = '';
    this.confirmPassword = '';
  }

  signUp() {
    if (this.userPassword !== this.confirmPassword) {
      alert('Passwords do not match');
      this.clear();
    }
    this.authService.signUpWithEmailAndPassword(this.userEmail, this.userPassword).then(() => {
      this.router.navigateByUrl('/todo');
    });
  }
}
