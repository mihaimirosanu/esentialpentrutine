import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualTransition1Component } from './visual-transition-1.component';

describe('VisualTransition1Component', () => {
  let component: VisualTransition1Component;
  let fixture: ComponentFixture<VisualTransition1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualTransition1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualTransition1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
