import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombatCalculatorRoutingModule } from './combat-calculator-routing.module';
import { CombatCalculatorComponent } from './combat-calculator.component';


import { SharedModule } from './../../shared/shared.module';



@NgModule({
  declarations: [CombatCalculatorComponent],
  imports: [
    CommonModule,
    CombatCalculatorRoutingModule,
    SharedModule
  ]
})
export class CombatCalculatorModule { 
  @Input() monster = "asd";
}
