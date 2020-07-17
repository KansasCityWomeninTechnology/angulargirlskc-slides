import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RafflePrizesComponent } from './raffle-prizes.component';

describe('RafflePrizesComponent', () => {
  let component: RafflePrizesComponent;
  let fixture: ComponentFixture<RafflePrizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RafflePrizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RafflePrizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
