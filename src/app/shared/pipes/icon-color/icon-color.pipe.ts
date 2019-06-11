import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconColor'
})

export class IconColorPipe implements PipeTransform {

  transform(value: string): string {
    return value === 'comment' ? 'light' : 'warning';
  }

}
