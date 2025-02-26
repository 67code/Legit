import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { RouterModule } from '@angular/router'; // Imports{}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
  imports: [FormsModule, RouterModule]
})
export class SignUpComponent {

  name: string = '';
  email: string = '';
  password: string = '';

  constructor() { }

  onSubmit() {
    if (this.name && this.email && this.password) {
      console.log('Form submitted!', { name: this.name, email: this.email, password: this.password });
      // Here, add your logic for user registration (e.g., API call)
    }
  }
}

