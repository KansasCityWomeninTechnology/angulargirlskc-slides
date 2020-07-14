import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortalModule } from '@angular/cdk/portal';

import { AppComponent } from './app.component';
import { LinksComponent } from './links/links.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SocialComponent } from './social/social.component';
import { TwitterComponent } from './social/twitter/twitter.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    ScheduleComponent,
    SocialComponent,
    TwitterComponent,
    SponsorsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
