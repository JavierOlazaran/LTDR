import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  private subscriptions$: Subscription[] = [];

  constructor() {
  }

  ngOnInit(): void {

  }

  //TODO: This should probably be moved to a new layer to process the data coming in the feed
  getLatestVideos() {

  }

}
