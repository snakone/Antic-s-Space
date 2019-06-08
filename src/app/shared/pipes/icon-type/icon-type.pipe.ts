import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconType'
})

export class IconTypePipe implements PipeTransform {

  transform(value: string): string {
    return value === 'comment' ? 'mail-open' : 'happy';
  }

}
