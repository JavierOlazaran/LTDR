import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CombatCalculatorBtnComponent } from './components/combat-calculator-btn/combat-calculator-btn.component';

@NgModule({
  declarations: [SideNavComponent, CombatCalculatorBtnComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SideNavComponent,
    CombatCalculatorBtnComponent
  ]
})
export class SharedModule { }
