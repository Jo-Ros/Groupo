import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  emailCtrl!: FormControl;
  passwordCtrl!: FormControl;
  userNameCtrl!: FormControl;

  constructor( private formBuilder: FormBuilder,
               private authService: AuthService,
               private router: Router) { }

  ngOnInit(): void {
    this.initMainForm()
  }

  initMainForm() {
    this.loginForm = this.formBuilder.group({
      email: this.emailCtrl,
      password: this.passwordCtrl,
    })
  }

  onLogin() {
    console.log(this.loginForm.value);
    this.authService.loginUser(this.loginForm.value).pipe(
      tap(connected => {
        if(connected) {
          console.log('connected user');
          this.router.navigateByUrl('/');
        }
      })
    ).subscribe();
  }

}
