import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { NavLink } from '../../models/nav-bar.models';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavButtonComponent implements OnInit {

  @Input() buttonData!: NavLink;

  constructor() { }

  ngOnInit(): void {

  }

}
