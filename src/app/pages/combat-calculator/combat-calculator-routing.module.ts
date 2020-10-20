import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CombatCalculatorComponent } from './combat-calculator.component';

const routes: Routes = [{ path: '', component: CombatCalculatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombatCalculatorRoutingModule { }
