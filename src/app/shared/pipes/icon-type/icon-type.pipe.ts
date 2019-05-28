import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconType'
})

export class IconTypePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (value === 'Like') {
      return 'heart';
    } else if (value === 'Comment') {
      return 'mail-open';
    } else {
      return 'happy';
    }
  }

}
