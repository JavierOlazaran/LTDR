import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaContentDisplayElementComponent } from './media-content-display-element.component';

describe('MediaContentDisplayElementComponent', () => {
  let component: MediaContentDisplayElementComponent;
  let fixture: ComponentFixture<MediaContentDisplayElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaContentDisplayElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaContentDisplayElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
