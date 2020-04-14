import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBannerComponent } from './nav-banner/nav-banner.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { BlogComponent } from './blog/blog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavBannerComponent,
    KeyboardsComponent,
    AboutMeComponent,
    HomeComponent,
    SiteFooterComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
