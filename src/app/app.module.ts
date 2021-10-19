import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './features/movie-list/movie-list.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavbarModule } from './shared/components/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
