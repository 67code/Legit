import { Routes } from '@angular/router';
import { HomeComponent } from '../app/containers/home/home.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { CompanyDetailsComponent } from './containers/company-details/company-details.component';
import { AboutComponent } from './containers/about/about.component';
import { SupportComponent } from './containers/support/support.component';
import { ProfileComponent } from './containers/profile/profile.component';
export const routes: Routes = [
  { path: '', component: HomeComponent} ,
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'company-details/:name', component: CompanyDetailsComponent },
  { path: 'about', component: AboutComponent },
  {path: 'support', component: SupportComponent},
  {path: 'profile', component: ProfileComponent}

];

