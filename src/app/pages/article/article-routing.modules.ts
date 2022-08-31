import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article.component';
import { ArticleReadComponent } from './component/article-read/article-read.component';
;




const routes: Routes = [
    {
        path: '',
        component: ArticleComponent,
        
    },
    {
        path: '1',
        component: ArticleReadComponent
    },
    { path: '2',
        component: ArticleReadComponent
    },
    { path: '3',
    component: ArticleReadComponent
    },
    { path: '4',
    component: ArticleReadComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }