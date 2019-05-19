import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { GamingPage } from './gaming.page';
import { ComponentsModule } from '../../shared/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: GamingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GamingPage]
})

export class GamingPageModule {}
