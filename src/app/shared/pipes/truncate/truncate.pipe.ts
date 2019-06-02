import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})

export class TruncatePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length <= 165) { return value; }
    return value.slice(0, 165) + '...';
  }

}
