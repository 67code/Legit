import { Routes } from '@angular/router';
import { HomeComponent } from '../app/contaners/home/home.component';
import { SignUpComponent } from './contaners/sign-up/sign-up.component';
import { SignInComponent } from './contaners/sign-in/sign-in.component';
export const routes: Routes = [
  { path: '', component: HomeComponent} ,
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
];

