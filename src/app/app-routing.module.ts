import { WaterNeedsComponent } from './water-needs/water-needs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreLandingComponent } from './pre-landing/pre-landing.component';
import { TotalCaloriesComponent } from './total-calories/total-calories.component';
import { MassIndexComponent } from './mass-index/mass-index.component';
import { BodyFatComponent } from './body-fat/body-fat.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: PreLandingComponent },
  { path: 'total-calories', component: TotalCaloriesComponent },
  { path: 'mass-index', component: MassIndexComponent },
  { path: 'BodyFat', component: BodyFatComponent },
  { path: 'water-needs', component: WaterNeedsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
