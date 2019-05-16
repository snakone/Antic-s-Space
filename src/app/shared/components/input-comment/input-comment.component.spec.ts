import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCommentComponent } from './input-comment.component';

describe('InputCommentComponent', () => {
  let component: InputCommentComponent;
  let fixture: ComponentFixture<InputCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCommentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
