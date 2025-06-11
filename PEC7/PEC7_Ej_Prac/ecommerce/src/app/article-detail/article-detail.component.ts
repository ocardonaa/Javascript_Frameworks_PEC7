import { Component } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../model/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent {
  public article: Article;
  constructor(private stockService: ArticleService,
    private route: ActivatedRoute) { } 1

  ngOnInit() {
    const articleCode = this.route.snapshot.paramMap.get('code'); 2
    this.stockService.getArticle(articleCode).subscribe(article => this.article = article);
  }
}
