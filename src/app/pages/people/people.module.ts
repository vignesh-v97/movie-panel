import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PeopleDetailComponent } from './people-detail/people-detail.component';


@NgModule({
  declarations: [
    PeopleComponent,
    PeopleDetailComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule
  ]
})
export class PeopleModule { }
