export interface NavLink {
  name: string;
  route: string;
  iconSrc: string;
}

export interface BreadCrumbsSection {
  name: string;
  breadCrumbs: NavLink[];
}
