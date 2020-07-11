import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
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
export class LinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
