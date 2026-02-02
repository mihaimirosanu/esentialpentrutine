import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Plant {
  name: string;
  image: string;
}

@Component({
  selector: 'app-plants-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plants-showcase.component.html',
  styleUrl: './plants-showcase.component.scss'
})
export class PlantsShowcaseComponent {
  plants: Plant[] = [
    {
      name: 'Lavandă',
      image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Lămâie',
      image: 'https://plus.unsplash.com/premium_photo-1675237625689-292df6ee7fce?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Mentă',
      image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Rozmarin',
      image: 'https://images.unsplash.com/photo-1726994803809-0e065bd4b25b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Eucalipt',
      image: 'https://plus.unsplash.com/premium_photo-1680632914445-f67dc3ec5194?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
}
