import { routesConstants } from './../../../constants/routes.constants';
import { NavLink } from './../models/nav-bar.models';

export const navButtons: NavLink[] = [
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
