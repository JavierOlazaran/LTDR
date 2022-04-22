import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.scss'],
  animations: [
    trigger('expand', [
      transition('void => *', [
        style({height: 0}),
        animate(200)
      ])
    ]),

    trigger('fold', [
      transition('* => void', [
          animate(200,
            style({height: 0})
          )
        ]
      )
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarMobileComponent implements OnInit {

  isNavbarExpanded = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggleClick(event: boolean): void {
    this.isNavbarExpanded = event;
  }

}
