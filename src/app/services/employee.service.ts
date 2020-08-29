/*
  @Project : Angular Material Demo
  @Author : Ashish Vishwakarma
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../interfaces/employee.interface';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  users: Employee[] = [];
  // default path for json
  apiUrl = '/assets/data/employee-data.json';

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) {
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  // getting the employees from json
  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  // registration for the user
  public addUser(user: Employee): boolean {
    if (user) {
      this.users.push(user);
      return true;
    }
  }
}
