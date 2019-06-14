import { NgModule } from '@angular/core';
import { ScrollHorizontalDirective } from './scroll-horizontal/scroll-horizontal.directive';

@NgModule({
  declarations: [
    ScrollHorizontalDirective
  ],
  exports: [
    ScrollHorizontalDirective
  ]
})

export class DirectivesModule { }
