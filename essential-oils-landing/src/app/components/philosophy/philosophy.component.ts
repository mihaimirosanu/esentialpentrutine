import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-philosophy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './philosophy.component.html',
  styleUrl: './philosophy.component.scss'
})
export class PhilosophyComponent implements OnInit {
  energyParticles: Array<{x: number, y: number, delay: number}> = [];

  ngOnInit() {
    this.generateEnergyParticles();
  }

  generateEnergyParticles() {
    for (let i = 0; i < 15; i++) {
      this.energyParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5
      });
    }
  }

  scrollToNextSection() {
    const nextSection = document.querySelector('app-vsl-video');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
