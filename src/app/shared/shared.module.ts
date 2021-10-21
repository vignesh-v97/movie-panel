import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TruncatePipe } from 'src/app/truncate.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    RouterModule ,
  ], 
  exports :[
    NavbarComponent,
    FooterComponent,
    TruncatePipe
  ]
})
export class SharedModule { }
