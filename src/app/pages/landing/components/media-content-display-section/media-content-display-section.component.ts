import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {YTLatestContent} from '../../../../data/dto/youtube/yt-latest-content.dto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-media-content-display-section',
  templateUrl: './media-content-display-section.component.html',
  styleUrls: ['./media-content-display-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaContentDisplaySectionComponent implements OnInit {

  @Input() mediaContent: Observable<YTLatestContent>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
