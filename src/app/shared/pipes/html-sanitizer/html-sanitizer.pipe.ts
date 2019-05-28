import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlSanitizer'
})
export class HtmlSanitizerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
