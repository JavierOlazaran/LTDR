import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Video } from '../../yt-latest-content.dto';

@Component({
  selector: 'LTDR-video-display',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoDisplayComponent {
    @Input({required: true}) video: Video;


}
