import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class MovieModule { }
