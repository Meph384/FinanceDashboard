import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopNavMenuComponent } from './top-nav-menu/top-nav-menu.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { UpgradeToProComponent } from './upgrade-to-pro/upgrade-to-pro.component';
import { TotalWidgetComponent } from './total-widget/total-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    TopNavMenuComponent,
    ProfileViewComponent,
    UpgradeToProComponent,
    TotalWidgetComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
