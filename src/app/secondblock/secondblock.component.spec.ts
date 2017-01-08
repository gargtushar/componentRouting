/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecondblockComponent } from './secondblock.component';

describe('SecondblockComponent', () => {
  let component: SecondblockComponent;
  let fixture: ComponentFixture<SecondblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
