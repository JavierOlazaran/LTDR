import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hamburger-btn',
  templateUrl: './hamburger-btn.component.html',
  styleUrls: ['./hamburger-btn.component.scss'],
  animations: [
    trigger('firstStripeOpenClose', [
      state('opened', style({
        transform: 'rotate(45deg)',
      })),
      transition('opened <=> *', [
        animate('300ms ease')
      ])
    ]),
    trigger('middleStripeOpenClose', [
      state('opened', style({
        transform: 'rotate(-45deg)',
        top: '-3px',
        width: '2.8em',
        left: '-0.8em'
      })),
      transition('* => opened', [
        animate('300ms ease')
      ]),
      transition('opened => *', [
        animate('300ms linear')
      ])
    ]),
    trigger('lastStripeOpenClose', [
      state('opened', style({
        transform: 'rotate(45deg)',
      })),
      transition('opened <=> *', [
        animate('300ms ease')
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HamburgerBtnComponent implements OnInit {

  @Input()
  public get toggleState(): boolean {
    return this._toggleState;
  }
  public set toggleState(toggleState: boolean) {
    this._toggleState = toggleState;
  }

  @Output() toggle = new EventEmitter<boolean>();

  _toggleState = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this._toggleState = !this._toggleState;
    this.toggle.emit(this._toggleState);
  }
}
