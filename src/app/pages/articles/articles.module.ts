import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArticlesPage } from './articles.page';
import { ComponentsModule } from '@app/shared/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ArticlesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArticlesPage]
})
export class ArticlesPageModule {}
