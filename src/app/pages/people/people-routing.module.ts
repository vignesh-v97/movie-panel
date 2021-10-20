import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleComponent } from './people.component';

const routes: Routes = [
  {path: "", component: PeopleComponent},
  {path: ':id', component: PeopleDetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
