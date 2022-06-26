import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaContentDisplayCarrouselComponent } from './media-content-display-carrousel.component';

describe('MediaContentDisplayCarrouselComponent', () => {
  let component: MediaContentDisplayCarrouselComponent;
  let fixture: ComponentFixture<MediaContentDisplayCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaContentDisplayCarrouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaContentDisplayCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
