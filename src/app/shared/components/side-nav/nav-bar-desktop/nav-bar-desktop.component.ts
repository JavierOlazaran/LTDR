import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar-desktop',
  templateUrl: './nav-bar-desktop.component.html',
  styleUrls: ['./nav-bar-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarDesktopComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
