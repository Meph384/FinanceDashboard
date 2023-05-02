import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopNavMenuComponent } from './top-nav-menu/top-nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    TopNavMenuComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
