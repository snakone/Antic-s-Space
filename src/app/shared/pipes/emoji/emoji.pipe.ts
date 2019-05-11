import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji'
})

export class EmojiPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    return `assets/img/emojis/${value}`;
  }

}
