/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaksListComponent } from './taks-list.component';

describe('TaksListComponent', () => {
  let component: TaksListComponent;
  let fixture: ComponentFixture<TaksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
