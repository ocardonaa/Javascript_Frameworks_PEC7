import { ResolveFn } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { inject } from '@angular/core';
import { Article } from '../model/article';

export const articleResolverResolver: ResolveFn<Article> = (route, state) => {
  const articleService = inject(ArticleService);
  const code = parseInt(route.paramMap.get('code'));
  return articleService.getArticle(code);
}
