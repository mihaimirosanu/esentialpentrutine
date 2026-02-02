import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-final',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-final.component.html',
  styleUrl: './cta-final.component.scss'
})
export class CtaFinalComponent implements OnInit {
  heartParticles: Array<{x: number, y: number, delay: number}> = [];

  ngOnInit() {
    this.generateHeartParticles();
  }

  generateHeartParticles() {
    for (let i = 0; i < 15; i++) {
      this.heartParticles.push({
        x: Math.random() * 90 + 5, // Keep hearts away from edges
        y: Math.random() * 80 + 10, // Keep hearts in middle area
        delay: Math.random() * 4 + 0.5 // Stagger animations
      });
    }
  }
}
