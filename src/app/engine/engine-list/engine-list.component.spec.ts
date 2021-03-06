/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EngineListComponent } from './engine-list.component';

describe('EngineListComponent', () => {
  let component: EngineListComponent;
  let fixture: ComponentFixture<EngineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
