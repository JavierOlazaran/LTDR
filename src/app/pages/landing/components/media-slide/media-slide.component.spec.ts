import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSlideComponent } from './media-slide.component';

describe('MediaSlideComponent', () => {
  let component: MediaSlideComponent;
  let fixture: ComponentFixture<MediaSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MediaSlideComponent]
    });
    fixture = TestBed.createComponent(MediaSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
