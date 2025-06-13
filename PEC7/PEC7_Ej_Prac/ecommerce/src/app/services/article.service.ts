import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/articles');
  }

  getArticle(code: number): Observable<Article> {
    return this.http.get<Article>('/api/articles/' + code);
  }

  createArticle(article: any): Observable<any> {
    const newArticle = new Article(0, article.name, article.url, parseFloat(article.price), article.onSale, parseInt(article.quantityInCart));
    return this.http.post<Article[]>('/api/articles', newArticle);
  }

  changeQuantity(articleID: number, units: number): Observable<Article> {
    return this.http.patch<Article>('/api/articles/' + articleID, {
      changeInQuantity: units
    });
  }
}
