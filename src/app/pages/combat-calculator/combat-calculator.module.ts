import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombatCalculatorRoutingModule } from './combat-calculator-routing.module';
import { CombatCalculatorComponent } from './combat-calculator.component';


@NgModule({
  declarations: [CombatCalculatorComponent],
  imports: [
    CommonModule,
    CombatCalculatorRoutingModule
  ]
})
export class CombatCalculatorModule { }
