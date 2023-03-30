import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-media-content-display-carrousel',
  templateUrl: './media-content-display-carrousel.component.html',
  styleUrls: ['./media-content-display-carrousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaContentDisplayCarrouselComponent implements OnInit {

  // @Input() contentCollection: ContentCollection;

  constructor() {
  }

  ngOnInit(): void {

  }

}
