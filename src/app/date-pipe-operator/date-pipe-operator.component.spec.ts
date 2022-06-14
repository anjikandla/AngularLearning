import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePipeOperatorComponent } from './date-pipe-operator.component';

describe('DatePipeOperatorComponent', () => {
  let component: DatePipeOperatorComponent;
  let fixture: ComponentFixture<DatePipeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePipeOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePipeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
