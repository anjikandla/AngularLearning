import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParameterResultComponent } from './route-parameter-result.component';

describe('RouteParameterResultComponent', () => {
  let component: RouteParameterResultComponent;
  let fixture: ComponentFixture<RouteParameterResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteParameterResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteParameterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
