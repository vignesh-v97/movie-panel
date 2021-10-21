import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TruncatePipe } from 'src/app/truncate.pipe';
import { DayWeekComponent } from './components/day-week/day-week.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TruncatePipe,
    DayWeekComponent
  ],
  imports: [
    CommonModule,
    RouterModule ,
  ], 
  exports :[
    NavbarComponent,
    FooterComponent,
    TruncatePipe,
    DayWeekComponent
  ]
})
export class SharedModule { }
