import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCommentsComponent } from './article-comments.component';

describe('ArticleCommentsComponent', () => {
  let component: ArticleCommentsComponent;
  let fixture: ComponentFixture<ArticleCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCommentsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
