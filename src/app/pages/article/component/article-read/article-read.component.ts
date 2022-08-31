import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article1',
  templateUrl: './article-read.component.html',
  styles: [`.artikel-content{
        margin-top: 120px;
    }
    .artikel-content h1{
        font-size: 2rem;
        font-weight: 600;
            margin: 0 0 20px 0;
    }`],
  
})
export class ArticleReadComponent implements OnInit {

  judul: string;

  constructor(private route: ActivatedRoute) {
    this.judul = '';
   }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
       this.judul = params["judul"];
    }
  );
  }

}
