import { Component } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css'
})

export class ArticleNewTemplateComponent {
  public article: Article;
  constructor() {
    this.article = new Article(0, 'test-article', '', 0, false, 1);
  }

  createArticle(articleForm: { valid: any; value: { article: Article; }; }) {
    if(articleForm.valid) {
      this.article = articleForm.value.article;
      console.log(this.article);
    }
    else {
      console.log('The article form is in an invalid state');
    }
  }
}
