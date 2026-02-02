import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { PositioningComponent } from './components/positioning/positioning.component';
import { OfferingComponent } from './components/offering/offering.component';
import { VisualTransition1Component } from './components/visual-transition-1/visual-transition-1.component';
import { PhilosophyComponent } from './components/philosophy/philosophy.component';
import { VslVideoComponent } from './components/vsl-video/vsl-video.component';
import { VisualTransition2Component } from './components/visual-transition-2/visual-transition-2.component';
import { DoterraIntroductionComponent } from './components/doterra-introduction/doterra-introduction.component';
import { PlantsShowcaseComponent } from './components/plants-showcase/plants-showcase.component';
import { CtaFinalComponent } from './components/cta-final/cta-final.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroComponent,
    PositioningComponent,
    OfferingComponent,
    VisualTransition1Component,
    PhilosophyComponent,
    VslVideoComponent,
    VisualTransition2Component,
    DoterraIntroductionComponent,
    PlantsShowcaseComponent,
    CtaFinalComponent,
    TestimonialsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'essential-oils-landing';
}
