import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconColor'
})

export class IconColorPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (value === 'Like') {
      return 'danger';
    } else if (value === 'Comment') {
      return 'light';
    } else {
      return 'success';
    }
  }

}
