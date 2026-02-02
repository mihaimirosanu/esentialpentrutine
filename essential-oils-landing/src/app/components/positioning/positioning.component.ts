import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-positioning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './positioning.component.html',
  styleUrl: './positioning.component.scss'
})
export class PositioningComponent implements OnInit {
  floatingElements: Array<{x: number, y: number, delay: number}> = [];

  ngOnInit() {
    this.generateFloatingElements();
  }

  generateFloatingElements() {
    for (let i = 0; i < 8; i++) {
      this.floatingElements.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 4
      });
    }
  }

  scrollToNextSection() {
    const nextSection = document.querySelector('app-offering');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
