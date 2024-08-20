import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'LTDR-media-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-slide.component.html',
  styleUrls: ['./media-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaSlideComponent {

}
