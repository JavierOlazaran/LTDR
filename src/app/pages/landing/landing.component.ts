import {Component, OnInit} from '@angular/core';
import {YoutubeService} from './services/youtube.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private youtubeSvc: YoutubeService,
  ) {
  }

  ngOnInit(): void {
    this.getLatestYTContent();
  }

  getLatestYTContent() {
    this.youtubeSvc.getLatestYTContent()
      .subscribe(data => {
        console.log(data);
    });
  }
}
