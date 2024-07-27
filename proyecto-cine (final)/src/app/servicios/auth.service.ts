import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor() {
    this.isLoggedIn = !!localStorage.getItem('user');
  }

  login(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.isLoggedIn = true;
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
