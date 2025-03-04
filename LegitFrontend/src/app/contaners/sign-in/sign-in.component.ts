import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule]
})
export class SignInComponent {

  email: string = '';
  password: string = '';

  constructor() { }

  onSubmit() {
    if (this.email && this.password) {
      console.log('Form submitted!', { email: this.email, password: this.password });
      // Here, add your logic for user authentication (e.g., API call)
    }
  }
}
