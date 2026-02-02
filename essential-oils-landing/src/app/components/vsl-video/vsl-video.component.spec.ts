import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VslVideoComponent } from './vsl-video.component';

describe('VslVideoComponent', () => {
  let component: VslVideoComponent;
  let fixture: ComponentFixture<VslVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VslVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VslVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
