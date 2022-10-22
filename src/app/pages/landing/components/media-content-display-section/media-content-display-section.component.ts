import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ContentCollection} from '../../../../data/model/content-display.model';

@Component({
  selector: 'app-media-content-display-section',
  templateUrl: './media-content-display-section.component.html',
  styleUrls: ['./media-content-display-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaContentDisplaySectionComponent implements OnInit {

  @Input() mediaContent: Observable<Map<string, ContentCollection>>;

  constructor() {
  }

  ngOnInit(): void {
    // this.mediaContent.subscribe(data => {
    //   console.log(data);
    // });
  }

}
