import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scrollHorizontal]'
})

export class ScrollHorizontalDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mousewheel') onMouseWheel(e) {
    this.scrollHorizontally(e);
  }

  scrollHorizontally(e: any) {
    // tslint:disable-next-line: deprecation
        e = window.event || e;
        const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        this.el.nativeElement.scrollLeft -= (delta * 40);
        e.preventDefault();
    }

}
