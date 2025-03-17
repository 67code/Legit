import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.css'],
  imports: [CommonModule],
})
export class InfoCardsComponent implements OnInit, OnDestroy {
  cards = [
    { text: "We help you buy from legit online sellers", image: "/auth_banner_2-4.jpg" },
    { text: "We hold the website's user base information", image: "/auth_banner_3-2.jpg" },
    { text: "We provide information about each website", image: "/women.jpg" },
    { text: "A trust score is provided for each website", image: "/old.jpg" }
  ];

  currentIndex: number = 0;
  prevIndex: number = -1; // Track the previous card index
  private interval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  // Start automatic sliding
  startAutoSlide(): void {
    this.interval = setInterval(() => {
      this.nextCard();
    }, 5000); // Change card every 5 seconds
  }

  // Stop automatic sliding
  stopAutoSlide(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  // Navigate to the next card
  nextCard(): void {
    this.prevIndex = this.currentIndex; // Set the previous index
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  }
}