import { Component } from '@angular/core';
import { MissionComponent } from './mission/mission.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { TrustMessageComponent } from './trust-message/trust-message.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
@Component({
  selector: 'app-home',
  imports: [MissionComponent,InfoCardsComponent,TrustMessageComponent,TestimonialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  reviewLink: string = "https://your-review-page.com"; // Replace with your actual review page link
  reviewText: string = `<span class="first-half">Bought something recently?</span> 
                         <span class="second-half"> Write a review →</span>`;
}
