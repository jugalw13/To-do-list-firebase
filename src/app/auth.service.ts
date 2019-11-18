import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  loginWithEmailAndPassword(email: string, password: string): void {
    if (!this.isLoggedIn) {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
        console.log('Logged In');
        this.router.navigateByUrl('/todo');
      });
    } else {
      this.router.navigateByUrl('/todo');
    }
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  loginWithGoogle() {
    const googleProvider = new auth.GoogleAuthProvider();
    if (!this.isLoggedIn) {
      this.afAuth.auth.signInWithPopup(googleProvider).then(() => {
        console.log('Logged In');
        this.router.navigateByUrl('/todo');
      });
    } else {
      this.router.navigateByUrl('/todo');
    }
  }

  logout() {
    if (this.isLoggedIn) {
      this.afAuth.auth.signOut().then(() => {
        console.log('Successfully Logged Out');
        localStorage.removeItem('user');
        this.router.navigate(['/']);
      });
    } else {
      console.log('Not signed-in to logout');
    }
  }

  signUpWithEmailAndPassword(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((userData) => {
        console.log('User Registered');
        resolve(userData);
      });
    });

  }
}
