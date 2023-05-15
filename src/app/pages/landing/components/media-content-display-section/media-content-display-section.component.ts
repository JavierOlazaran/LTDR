import {ChangeDetectionStrategy, Component, OnInit, DestroyRef, inject, ChangeDetectorRef} from '@angular/core';
import { YTContentDTO } from '../../yt-latest-content.dto';
import { YoutubeService } from '../../services/youtube.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-content-display-section',
  templateUrl: './media-content-display-section.component.html',
  styleUrls: ['./media-content-display-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaContentDisplaySectionComponent implements OnInit {

  private youtubeSvcSubscription: Subscription;
  youtubeContent: YTContentDTO = {
    videos: [],
    playlists: [],
    shorts: [],
  };

  constructor(
    private youtubeSvc: YoutubeService,
    private changeDetector: ChangeDetectorRef,
    ) {
    inject(DestroyRef).onDestroy(() => {
      this.youtubeSvcSubscription.unsubscribe();
    });
  }

  ngOnInit(): void {
    this.getLatestYTContent();
  }

  getLatestYTContent() {
    this.youtubeSvcSubscription = this.youtubeSvc
      .getLatestYTContent()
      .subscribe((data: YTContentDTO) => {
        console.log(data);
        this.youtubeContent = data;
        this.changeDetector.detectChanges();
      });
  }
}
