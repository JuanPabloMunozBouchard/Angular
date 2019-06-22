import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: 'heroes' , component: HeroesComponent},
  { path: 'heroes/:heroes' , component: HeroesComponent},
  { path: 'about' , component: AboutComponent},
  { path: 'heroe/:id' , component: HeroeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
