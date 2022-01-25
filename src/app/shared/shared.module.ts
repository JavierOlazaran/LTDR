import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CombatCalculatorBtnComponent } from './components/combat-calculator-btn/combat-calculator-btn.component';
import { PageNavigationComponent } from './components/side-nav/page-navigation/page-navigation.component';
import { NavButtonComponent } from './components/side-nav/page-navigation/nav-button/nav-button.component';
import { NavBarFooterComponent } from './components/side-nav/nav-bar-footer/nav-bar-footer.component'

@NgModule({
  declarations: [SideNavComponent, CombatCalculatorBtnComponent, PageNavigationComponent, NavButtonComponent, NavBarFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SideNavComponent,
    CombatCalculatorBtnComponent,
  ]
})
export class SharedModule { }
