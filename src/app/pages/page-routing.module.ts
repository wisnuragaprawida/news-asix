import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'tentang-kami',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'artikel',
    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
