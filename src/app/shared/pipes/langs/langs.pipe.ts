import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lang'
})

export class LangsPipe implements PipeTransform {

  transform(value: string, ): string {
    return `assets/img/langs/${value}.svg`;
  }

}
