import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFooterComponent } from './article-footer.component';

describe('ArticleFooterComponent', () => {
  let component: ArticleFooterComponent;
  let fixture: ComponentFixture<ArticleFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFooterComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
