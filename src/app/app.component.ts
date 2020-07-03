import { Component, OnInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { LinksComponent } from './links/links.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SocialComponent } from './social/social.component';
import { interval, Observable } from 'rxjs';
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
    new ComponentPortal(SocialComponent)
  ];

  public slide$: Observable<ComponentPortal<any>>;


  constructor() {}

  ngOnInit(): void {
    this.slide$ = interval(15000).pipe(
      startWith(2),
      map(num => this.slidesToDisplay[num % 3])
    );
  }
}
