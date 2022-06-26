import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-content-display-section',
  templateUrl: './media-content-display-section.component.html',
  styleUrls: ['./media-content-display-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaContentDisplaySectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
