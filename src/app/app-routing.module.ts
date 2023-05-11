import { routesConstants } from './shared/constants/routes.constants';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: routesConstants.rootRoutes.LANDING_PAGE, pathMatch: 'full'},
  {
    path: routesConstants.rootRoutes.LANDING_PAGE,
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: routesConstants.rootRoutes.COMBAT_CALCULATOR_PAGE,
    loadChildren: () => import('./pages/combat-calculator/combat-calculator.module').then(m => m.CombatCalculatorModule)
  },
  {
    path: routesConstants.rootRoutes.ADMIN_PAGE,
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
