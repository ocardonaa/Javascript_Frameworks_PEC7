import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';
import {
  deactivateGuard
} from '../guards/deactivate.guard';
import { articleResolverResolver } from '../resolvers/article-resolver.resolver';
import { ArticleNewReactiveComponent } from '../article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';
import { ArticleListComponent } from '../article-list/article-list.component';


const routes: Routes = [
  {
    path: 'list', component: ArticleListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'create', component: ArticleNewReactiveComponent,
    canActivate: [authGuard],
    canDeactivate: [deactivateGuard]
  },
  {
    path: ':code', component: ArticleDetailComponent,
    canActivate: [authGuard],
    resolve: { article: articleResolverResolver }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
