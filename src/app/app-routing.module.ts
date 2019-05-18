import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavigationGuard } from '@core/services/guards/navigation.guard';
import { LoginGuard } from '@core/services/guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule',
    canActivate: [NavigationGuard]
  },
  {
    path: 'articles',
    loadChildren: './pages/articles/articles.module#ArticlesPageModule',
    canActivate: [NavigationGuard]
  },
  {
    path: 'gaming',
    loadChildren: './pages/gaming/gaming.module#GamingPageModule',
    canActivate: [NavigationGuard]
  },
  {
    path: 'article/:id',
    loadChildren: './pages/article/article.module#ArticlePageModule',
    canActivate: [NavigationGuard]
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfilePageModule',
    canActivate: [NavigationGuard]
  },
  { path: '**', loadChildren: './shared/components/error404/error404.module#Error404PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
