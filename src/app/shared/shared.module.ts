import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CombatCalculatorBtnComponent } from './components/combat-calculator-btn/combat-calculator-btn.component';
import { MonsterCardComponent } from './components/monster-card/monster-card.component';

@NgModule({
  declarations: [SideNavComponent, CombatCalculatorBtnComponent, MonsterCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SideNavComponent,
    CombatCalculatorBtnComponent,
    MonsterCardComponent
  ]
})
export class SharedModule { }
