import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  mainForm!: FormGroup;
  emailCtrl!: FormControl;
  passwordCtrl!: FormControl;
  userNameCtrl!: FormControl;

  constructor( private formBuilder: FormBuilder,
               private authService: AuthService) { }

  ngOnInit(): void {
    this.initMainForm()
  }

  initMainForm() {
    this.mainForm = this.formBuilder.group({
      email: this.emailCtrl,
      password: this.passwordCtrl,
      username: this.passwordCtrl,
    })
  }

  onSubmitForm() {
    console.log(this.mainForm.value);
    this.authService.registerNewUser(this.mainForm.value).pipe(
      switchMap(() => this.authService.loginUser(this.mainForm.value)),
      tap(saved => {
        if(saved) {
          this.mainForm.reset();
          console.log('saved user');
        }
      })
    ).subscribe();
  }

}
