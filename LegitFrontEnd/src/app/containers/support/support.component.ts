import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  onSubmit() {
    alert('Thank you! Your message has been sent.');
    // Later: integrate email or backend API here
  }
}
