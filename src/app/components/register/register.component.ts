/*
  @Project : Angular Material Demo
  @Author : Ashish Vishwakarma
*/

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/interfaces/employee.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  form: FormGroup;
  employee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      username: ['', Validators.email],
      password: ['', Validators.required],
      active: [true]
    });

  }

  // submitting the form data for new employee
  public onSubmit(): void {
    const registered = this.employeeService.addUser(this.form.value);
    if (registered) {
      alert('Registered user successful');
      this.form.reset();
      this.route.navigate(['login']);
    }
    else {
      alert('something went wrong');
    }
  }

}
