import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vsl-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vsl-video.component.html',
  styleUrl: './vsl-video.component.scss'
})
export class VslVideoComponent {

  scrollToNextSection() {
    const nextSection = document.querySelector('app-visual-transition-2');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
