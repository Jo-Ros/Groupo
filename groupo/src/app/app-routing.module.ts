import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
//import { LoginComponent } from './auth/login/login.component';
//import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  //{ path: 'auth/login', component: LoginComponent},
  { path: 'auth', component: AuthPageComponent},
  {path: '', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
