import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParamatersComponent } from './route-paramaters.component';

describe('RouteParamatersComponent', () => {
  let component: RouteParamatersComponent;
  let fixture: ComponentFixture<RouteParamatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteParamatersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteParamatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
