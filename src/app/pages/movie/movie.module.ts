import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
  ]
})
export class MovieModule { }
