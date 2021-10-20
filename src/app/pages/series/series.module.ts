import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SeriesDetailComponent } from './series-detail/series-detail.component';


@NgModule({
  declarations: [
    SeriesComponent,
    SeriesDetailComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    SharedModule
  ]
})
export class SeriesModule { }
