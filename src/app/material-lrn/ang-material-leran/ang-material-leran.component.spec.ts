import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngMaterialLeranComponent } from './ang-material-leran.component';

describe('AngMaterialLeranComponent', () => {
  let component: AngMaterialLeranComponent;
  let fixture: ComponentFixture<AngMaterialLeranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngMaterialLeranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngMaterialLeranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
