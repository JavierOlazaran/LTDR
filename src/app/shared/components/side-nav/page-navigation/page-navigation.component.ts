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
      iconSrc: '../../../../../assets/imgs/svg/home-icon.svg#g46'
    },
    {
      name: 'acerca',
      route: '',
      iconSrc: '../../../../../../assets/imgs/svg/ship-icon.svg#g6'
    },
    {
      name: 'contacto',
      route: '',
      iconSrc: '../../../../../../assets/imgs/svg/papyrus-icon.svg#g108'
    },
    {
      name: 'donaciones',
      route: '',
      iconSrc: '../../../../../../assets/imgs/svg/money_bag-icon.svg#g10'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
