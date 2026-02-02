import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GlitterParticle {
  x: number;
  y: number;
  delay: number;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  glitterParticles: GlitterParticle[] = [];
  
  constructor() {
    this.generateGlitterParticles();
  }
  
  scrollToNextSection() {
    const heroElement = document.querySelector('.hero');
    if (heroElement) {
      const heroHeight = heroElement.getBoundingClientRect().height;
      window.scrollTo({
        top: heroHeight,
        behavior: 'smooth'
      });
    }
  }
  
  private generateGlitterParticles() {
    for (let i = 0; i < 8; i++) {
      this.glitterParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3
      });
    }
  }
}
