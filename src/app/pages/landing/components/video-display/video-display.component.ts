import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Video } from '../../yt-latest-content.dto';
import { YOUTUBE_VIDEO_BASE } from 'src/app/shared/constants/routes.constants';

@Component({
  selector: 'LTDR-video-display',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoDisplayComponent implements OnInit {
  @Input({ required: true }) video!: Video;
  videoUrl: string;

  ngOnInit(): void {
    this.videoUrl = `${YOUTUBE_VIDEO_BASE}${this.video.videoID}`;
  }
}
