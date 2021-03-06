/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrangeComponent } from './orange.component';

describe('OrangeComponent', () => {
  let component: OrangeComponent;
  let fixture: ComponentFixture<OrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
