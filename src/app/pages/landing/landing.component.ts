import {Component, OnInit} from '@angular/core';
import {YoutubeService} from './services/youtube.service';
import {Observable} from 'rxjs';
import {YTLatestContent} from '../../data/dto/youtube/yt-latest-content.dto';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  getLatestYTContent$: Observable<YTLatestContent>;

  constructor(
    private youtubeSvc: YoutubeService
  ) {
  }

  ngOnInit(): void {
    this.getLatestYTContent();
  }

  getLatestYTContent() {
    this.getLatestYTContent$ = this.youtubeSvc.getLatestYTContent();

  }
}
