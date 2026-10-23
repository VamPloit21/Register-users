import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface UserAuth {
  nombre: string;
  correo: string;
  contrasena: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private USERS_KEY = 'registered_users';
  private SESSION_KEY = 'active_user';

  constructor(private router: Router) {}

  register(user: UserAuth): boolean {
    const users = this.getUsers();
    if (users.some(u => u.correo === user.correo)) {
      return false; // El usuario ya existe
    }
    users.push(user);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    return true;
  }

  login(correo: string, contrasena: string): boolean {
    const users = this.getUsers();
    const foundUser = users.find(u => u.correo === correo && u.contrasena === contrasena);
    if (foundUser) {
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(foundUser));
      return true;
    }
    return false;
  }

  getCurrentUser(): UserAuth | null {
    const data = localStorage.getItem(this.SESSION_KEY);
    return data ? JSON.parse(data) : null;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.SESSION_KEY);
  }

  logout(): void {
    localStorage.removeItem(this.SESSION_KEY);
    this.router.navigate(['/login']);
  }

  private getUsers(): UserAuth[] {
    const data = localStorage.getItem(this.USERS_KEY);
    return data ? JSON.parse(data) : [];
  }
}