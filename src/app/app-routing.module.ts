import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth/auth.guard';

const routes: Routes = [
  { path: "", loadChildren: ()=>import('./pages/landing-page/landing-page.module').then((m)=>m.LandingPageModule),canActivate: [AuthGuard] },
  { path: "movie", loadChildren: ()=>import('./pages/movie/movie.module').then((m)=>m.MovieModule) },
  { path: "series", loadChildren: ()=>import('./pages/series/series.module').then((m)=>m.SeriesModule) },
  { path: "people", loadChildren: ()=>import('./pages/people/people.module').then((m)=>m.PeopleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
