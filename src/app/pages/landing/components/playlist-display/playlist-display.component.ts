import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Playlist } from '../../yt-latest-content.dto';

@Component({
  selector: 'LTDR-playlist-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playlist-display.component.html',
  styleUrls: ['./playlist-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistDisplayComponent {
   @Input({required: true}) playlist: Playlist
}
