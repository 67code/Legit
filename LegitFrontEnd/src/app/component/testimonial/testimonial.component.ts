import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-testimonial',
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  testimonials = [
    { text: "Great service!", user: "Alice", image: "/jamal.jpg" },
    { text: "Very reliable!", user: "cristiano", image: "/ronaldo.jpg" },
    { text: "Made my shopping experience easy!", user: "westside", image: "/syed.jpg" },
    { text: "saves my time", user: "kendall", image: "/kendall.jpg" }
  ];

  ngOnInit() {
    console.log("Testimonials Loaded:", this.testimonials);
  }
}
