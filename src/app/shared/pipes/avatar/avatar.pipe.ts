import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar'
})

export class AvatarPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    if (!value) { return 'assets/img/avatars/no-avatar.png'; }
    return value = 'assets/img/avatars/' + value;
  }

}
