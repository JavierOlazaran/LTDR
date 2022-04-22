import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CombatCalculatorBtnComponent } from './components/combat-calculator-btn/combat-calculator-btn.component';
import { PageNavigationComponent } from './components/side-nav/page-navigation/page-navigation.component';
import { NavButtonComponent } from './components/side-nav/page-navigation/nav-button/nav-button.component';
import { NavBarFooterComponent } from './components/side-nav/nav-bar-footer/nav-bar-footer.component';
import { MonsterCardComponent } from './components/monster-card/monster-card.component';
import { NavBarMobileComponent } from './components/side-nav/nav-bar-mobile/nav-bar-mobile.component';
import { NavBarDesktopComponent } from './components/side-nav/nav-bar-desktop/nav-bar-desktop.component';
import { HamburgerBtnComponent } from './components/hamburger-btn/hamburger-btn.component';

@NgModule({
  declarations: [
    SideNavComponent,
    CombatCalculatorBtnComponent,
    PageNavigationComponent,
    NavButtonComponent,
    NavBarFooterComponent,
    MonsterCardComponent,
    NavBarMobileComponent,
    NavBarDesktopComponent,
    HamburgerBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideNavComponent,
    CombatCalculatorBtnComponent,
    MonsterCardComponent,
    NavBarMobileComponent,
    NavBarDesktopComponent,
    HamburgerBtnComponent
  ]
})
export class SharedModule { }
