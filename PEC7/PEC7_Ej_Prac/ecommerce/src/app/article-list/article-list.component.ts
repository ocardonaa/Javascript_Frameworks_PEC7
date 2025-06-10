import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../article.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {

  public articles$: Observable<Article[]>;
  public filteredArticles$: Observable<Article[]>;
  private searchTerm$ = new BehaviorSubject<string>('');

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles$ = this.articleService.getArticles();
    this.filteredArticles$ = combineLatest([
      this.articles$,
      this.searchTerm$.pipe(
        debounceTime(100),
        distinctUntilChanged(),
        startWith('')
      ),
    ]).pipe(
      map(([articles, searchTerm]) =>
        articles.filter(article =>
          article.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }

  set searchTerm(value: string) {
    this.searchTerm$.next(value);
  }
  get searchTerm(): string {
    return this.searchTerm$.getValue();
  }

}