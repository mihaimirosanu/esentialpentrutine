import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  location: string;
  text: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: "Ana M.",
      location: "București",
      text: "Pentru prima dată simt că corpul meu primește exact ce are nevoie. Fără forțare, fără promisiuni goale. Doar claritate și rezultate pe care le simt în fiecare zi."
    },
    {
      name: "Cristina P.",
      location: "Cluj",
      text: "Am încercat multe lucruri, dar aici am găsit o abordare care respectă ritmul meu natural. Informațiile sunt clare și pot să le aplic imediat în viața de zi cu zi."
    },
    {
      name: "Elena R.",
      location: "Timișoara", 
      text: "Nu mai caut soluții spectaculoase. Am învățat să fiu prezentă în corpul meu și să îl sprijin cu ceea ce recunoaște. Este o schimbare profundă și reală."
    }
  ];
}
