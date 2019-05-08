import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingPage } from './gaming.page';

describe('GamingPage', () => {
  let component: GamingPage;
  let fixture: ComponentFixture<GamingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
