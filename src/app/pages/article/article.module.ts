import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleRoutingModule } from './article-routing.modules';
import { ArticleReadComponent } from './component/article-read/article-read.component';




@NgModule({
  declarations: [ArticleComponent,ArticleReadComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule

  ]
})
export class ArticleModule { }
