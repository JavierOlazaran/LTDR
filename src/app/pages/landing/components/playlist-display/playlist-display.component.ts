import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'LTDR-playlist-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playlist-display.component.html',
  styleUrls: ['./playlist-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistDisplayComponent {

}
