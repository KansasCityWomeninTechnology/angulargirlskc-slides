import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
