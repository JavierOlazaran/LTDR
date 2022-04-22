import { BreadCrumbsSection } from './../models/nav-bar.models';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav-bar-footer',
  templateUrl: './nav-bar-footer.component.html',
  styleUrls: ['./nav-bar-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarFooterComponent implements OnInit {

  breadCrumbsSections: BreadCrumbsSection[] = [
    {
      name: 'contenido',
      breadCrumbs: [
        {
          name: '',
          route: '',
          iconSrc: ''
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
