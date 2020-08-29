/*
  @Project : Angular Material Demo
  @Author : Ashish Vishwakarma
*/

import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // hardcoded credentials to be used
  private username = 'ashish@demo.com';
  private password = 'Nga@123';

  constructor(private route: Router) { }

  // validating the login and setting to localStorage
  public login(employee: Employee): boolean {
    if (this.username === employee.username && this.password === employee.password) {
      localStorage.setItem('login', 'true');
      return true;
    }
    else {
      return false;
    }
  }

  // validating the login through localStorage
  public validateLogin(): boolean {
    const logged = localStorage.getItem('login');
    if (logged === 'true') {
      return true;
    }
    else {
      return false;
    }
  }

  // cleaning the local storage and routing back to login
  public logout(): void {
    localStorage.removeItem('login');
    this.route.navigate(['login']);
  }
}
