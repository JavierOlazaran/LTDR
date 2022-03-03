import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
