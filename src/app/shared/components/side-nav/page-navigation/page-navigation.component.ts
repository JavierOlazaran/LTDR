import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { routesConstants } from 'src/app/shared/constants/routes.constants';
import { NavLink } from '../models/nav-bar.models';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNavigationComponent implements OnInit {

  navButtons: NavLink[] = [
    {
      name: 'inicio',
      route: routesConstants.rootRoutes.LANDING_PAGE,
      iconSrc: ''
    },
    {
      name: 'acerca',
      route: '',
      iconSrc: ''
    },
    {
      name: 'contacto',
      route: '',
      iconSrc: ''
    },
    {
      name: 'donaciones',
      route: '',
      iconSrc: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
