import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path: 'home',
        loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)
      },
      {
        path: 'combat-calculator',
        loadChildren: () => import('./pages/combat-calculator/combat-calculator.module').then(m => m.CombatCalculatorModule)
      },
      {
        path: 'dungeon',
        loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
