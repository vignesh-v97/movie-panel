import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TruncatePipe } from 'src/app/truncate.pipe';
import { DayWeekComponent } from './components/day-week/day-week.component';
import { ImgLoadingHelperDirective } from './directives/img-loading-helper.directive';
import { PaginationDirective } from './directives/pagination.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TruncatePipe,
    DayWeekComponent,
    ImgLoadingHelperDirective,
    PaginationDirective,
  ],
  imports: [
    CommonModule,
    RouterModule ,
    FormsModule
  ],
  exports :[
    NavbarComponent,
    FooterComponent,
    TruncatePipe,
    DayWeekComponent,
    PaginationDirective,
    ImgLoadingHelperDirective,
  ]
})
export class SharedModule { }
