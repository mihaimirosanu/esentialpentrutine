import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-positioning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './positioning.component.html',
  styleUrl: './positioning.component.scss'
})
export class PositioningComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('profileImage') profileImage!: ElementRef;
  
  floatingElements: Array<{x: number, y: number, delay: number}> = [];
  private observer!: IntersectionObserver;

  ngOnInit() {
    this.generateFloatingElements();
  }

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setupIntersectionObserver() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add zoom-in class when element comes into view
            setTimeout(() => {
              entry.target.classList.add('zoom-in');
            }, 300); // Small delay for better effect
          }
        });
      }, {
        threshold: 0.3 // Trigger when 30% of the element is visible
      });

      if (this.profileImage) {
        this.observer.observe(this.profileImage.nativeElement);
      }
    }
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
