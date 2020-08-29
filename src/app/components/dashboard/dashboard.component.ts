/*
  @Project : Angular Material Demo
  @Author : Ashish Vishwakarma
*/

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from 'src/app/interfaces/employee.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public employees: Employee[];
  public displayedColumns: string[] = ['id', 'name', 'designation', 'department', 'active'];

  constructor(
    private employeeService: EmployeeService,
    private authService: AuthService
  ) { }

  public ngOnInit(): void {
    this.getEmployees();
  }

  // getting all employee data
  private getEmployees(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  // method to logout from
  public logout(): void {
    this.authService.logout();
  }
}
