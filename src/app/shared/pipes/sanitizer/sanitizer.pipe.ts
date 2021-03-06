import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizer'
})

export class SanitizerPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string, args?: string): any {
    if (!value) { return; }
    if (args === 'style') {
      const style = `background-image: url('${value}')`;
      return this.sanitizer.bypassSecurityTrustStyle(style);
    }
  }

}
