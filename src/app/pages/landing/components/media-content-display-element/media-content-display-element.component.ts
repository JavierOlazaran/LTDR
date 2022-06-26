import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-content-display-element',
  templateUrl: './media-content-display-element.component.html',
  styleUrls: ['./media-content-display-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaContentDisplayElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
