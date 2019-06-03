import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})

export class PercentagePipe implements PipeTransform {

  transform(value: number): string {
    if (value === 0) { return '1%'; }
    return value + '%';
  }

}
