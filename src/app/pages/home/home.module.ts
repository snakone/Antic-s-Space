import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomePage } from './home.page';
import { SharedModule } from '@shared/shared.module';
import { ComponentsModule } from '@shared/components/components.module';

import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { SmallSliderComponent } from './components/small-slider/small-slider.component';
import { LatestComponent } from './components/latest/latest.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { PopularComponent } from './components/popular/popular.component';
import { ConnectComponent } from './components/connect/connect.component';
import { TrendingComponent } from './components/trending/trending.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ComponentsModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    MainSliderComponent,
    SmallSliderComponent,
    TrendingComponent,
    LatestComponent,
    ArticlesComponent,
    ConnectComponent,
    PopularComponent,
    CommentsComponent
  ]
})

export class HomePageModule {}
