import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceReactionComponent } from './face-reaction.component';

describe('FaceReactionComponent', () => {
  let component: FaceReactionComponent;
  let fixture: ComponentFixture<FaceReactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceReactionComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceReactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
