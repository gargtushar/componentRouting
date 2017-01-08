/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirstblockComponent } from './firstblock.component';

describe('FirstblockComponent', () => {
  let component: FirstblockComponent;
  let fixture: ComponentFixture<FirstblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
