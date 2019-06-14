import { ScrollHorizontalDirective } from './scroll-horizontal.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('ScrollHorizontalDirective', () => {
  it('should create an instance', () => {
    // tslint:disable-next-line:prefer-const
    let el: ElementRef;
    const directive = new ScrollHorizontalDirective(el);
    expect(directive).toBeTruthy();
  });
});
