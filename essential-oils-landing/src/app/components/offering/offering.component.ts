import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offering',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offering.component.html',
  styleUrl: './offering.component.scss'
})
export class OfferingComponent implements OnInit {
  sparkleElements: Array<{x: number, y: number, delay: number}> = [];

  ngOnInit() {
    this.generateSparkleElements();
  }

  generateSparkleElements() {
    for (let i = 0; i < 12; i++) {
      this.sparkleElements.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3
      });
    }
  }

  scrollToNextSection() {
    const nextSection = document.querySelector('app-visual-transition-1');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
