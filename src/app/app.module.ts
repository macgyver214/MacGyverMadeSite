import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBannerComponent } from './nav-banner/nav-banner.component';
import { KeyboardsComponent } from './pages/keyboards/keyboards.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomeComponent } from './pages/home/home.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Icons to import to the library
import { faYoutube, faTwitter, faTwitch, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
    // angular
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // third party icons
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  // initialize an icon library with the icons desired during construction
  constructor(library: FaIconLibrary) {
    library.addIcons(faYoutube, faTwitter, faTwitch, faDiscord, faLinkedin, faEnvelope);
  }
 }
