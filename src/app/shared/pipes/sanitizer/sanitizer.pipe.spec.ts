import { SanitizerPipe } from './sanitizer.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('SanitizerPipe', () => {
  it('create an instance', () => {
    // tslint:disable-next-line:prefer-const
    let sanitizer: DomSanitizer;
    const pipe = new SanitizerPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
