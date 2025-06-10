import { Component, Input } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {

  @Input()

  public article: Article;
  public articleClasses;
  public priceClasses;

  constructor(private articleService: ArticleService) {

  }

  onChangeQuantity(event: Event, change: number) {
    const newQuantity = this.article.quantityInCart + change;
    if (newQuantity < 0) {
      console.log('There cannot be negative quantities in the cart');
      return;
    }
    this.articleService.changeQuantity(this.article.id, change)
      .subscribe((newArticle) => { this.article.quantityInCart = newArticle.quantityInCart });
  }
}