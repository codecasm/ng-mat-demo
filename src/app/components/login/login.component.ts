/*
  @Project : Angular Material Demo
  @Author : Ashish Vishwakarma
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public loginInvalid: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) { }

  public ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  // submit the credentials and verify
  public onSubmit(): void {
    const loggedin = this.authService.login(this.form.value);
    if (loggedin) {
      this.loginInvalid = false;
      this.route.navigate(['dashboard']);
    }
    else {
      this.loginInvalid = true;
    }
  }

}
