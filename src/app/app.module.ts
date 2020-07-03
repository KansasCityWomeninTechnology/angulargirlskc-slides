import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { PortalModule } from '@angular/cdk/portal';

import { AppComponent } from './app.component';
import { LinksComponent } from './links/links.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SocialComponent } from './social/social.component';
import { TwitterComponent } from './social/twitter/twitter.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    ScheduleComponent,
    SocialComponent,
    TwitterComponent,
  ],
  imports: [
    BrowserModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
