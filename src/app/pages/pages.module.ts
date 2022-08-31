import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PageRoutingModule } from './page-routing.module';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AboutComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PagesModule { }
