import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboadComponent } from './dashboad/dashboad.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboad', pathMatch: 'full' },
  { path: 'dashboad', component: DashboadComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
