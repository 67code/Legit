import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.css'],
  imports: [CommonModule],
})
export class InfoCardsComponent {
  cards = [
    { text: "We help you buy from legit online sellers", image: "/auth_banner_2-4.jpg" },
    { text: "We hold the website's user base information", image: "/auth_banner_3-2.jpg" },
    { text: "We provide information about each website", image: "/women.jpg" },
    { text: "A trust score is provided for each website", image: "/old.jpg" }
  ];

  currentIndex: number = 0;

  prevCard() {
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  }

  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  }
}


