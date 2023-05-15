import {SharedModule} from '../../shared/shared.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LandingRoutingModule} from './landing-routing.module';
import {LandingComponent} from './landing.component';
import {ScheduleBlockComponent} from './components/schedule-block/schedule-block.component';
import {ScheduleItemComponent} from './components/schedule-item/schedule-item.component';
import {MediaContentDisplaySectionComponent} from './components/media-content-display-section/media-content-display-section.component';
import {DataModule} from '../../data/data.module';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeService } from './services/youtube.service';
import { VideoDisplayComponent } from './components/video-display/video-display.component';


@NgModule({
  declarations: [
    LandingComponent,
    ScheduleBlockComponent,
    ScheduleItemComponent,
    MediaContentDisplaySectionComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    DataModule,
    HttpClientModule,
    VideoDisplayComponent
  ],
  providers: [YoutubeService],
})
export class LandingModule {}
