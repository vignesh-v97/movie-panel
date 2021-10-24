import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayWeekComponent } from './day-week.component';

describe('DayWeekComponent', () => {
  let component: DayWeekComponent;
  let fixture: ComponentFixture<DayWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
