import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
  ]
})
export class LandingPageModule { }
