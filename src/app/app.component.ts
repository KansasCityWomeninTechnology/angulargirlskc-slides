import { Component, OnInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { LinksComponent } from './links/links.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SocialComponent } from './social/social.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { RafflePrizesComponent } from './raffle-prizes/raffle-prizes.component';
import { interval, Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private slidesToDisplay: ComponentPortal<any>[] = [
    new ComponentPortal(LinksComponent),
    new ComponentPortal(ScheduleComponent),
    new ComponentPortal(SponsorsComponent),
    new ComponentPortal(RafflePrizesComponent),
    new ComponentPortal(SocialComponent)
  ];

  public slide$: Observable<ComponentPortal<any>>;


  constructor() {}

  ngOnInit(): void {
    this.slide$ = interval(15000).pipe(
      startWith(4),
      map(num => this.slidesToDisplay[num % 5])
    );
  }
}
