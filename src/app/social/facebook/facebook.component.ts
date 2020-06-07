import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    console.log('facebook init');
  }

  ngAfterViewInit(): void {
    console.log('facebook afterviewinit');
  }
}
