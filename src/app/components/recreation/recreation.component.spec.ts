/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecreationComponent } from './recreation.component';

describe('RecreationComponent', () => {
  let component: RecreationComponent;
  let fixture: ComponentFixture<RecreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
