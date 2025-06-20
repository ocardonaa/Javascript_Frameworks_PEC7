import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css', '../article-item/article-item.component.css']
})

export class ArticleDetailComponent implements OnInit {
  public article: Article;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { article: Article }) => {
      this.article = data.article;
    })
  }
}
