import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

  import { ArticlesPage } from './articles.page';
import { ComponentsModule } from '@app/shared/components/components.module';
import { SegmentsComponent } from './components/segments/segments.component';
import { ArticlesSlideComponent } from './components/articles-slide/articles-slide.component';
import { SharedModule } from '@app/shared/shared.module';
import { ArticlesSearchComponent } from './components/articles-search/articles-search.component';

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
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ArticlesPage,
    SegmentsComponent,
    ArticlesSlideComponent,
    ArticlesSearchComponent
  ]
})

export class ArticlesPageModule {}
