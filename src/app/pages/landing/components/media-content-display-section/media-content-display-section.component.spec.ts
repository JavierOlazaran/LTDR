import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaContentDisplaySectionComponent } from './media-content-display-section.component';

describe('MediaContentDispalySectionComponent', () => {
  let component: MediaContentDisplaySectionComponent;
  let fixture: ComponentFixture<MediaContentDisplaySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaContentDisplaySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaContentDisplaySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
