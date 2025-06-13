import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { authGuard } from './guards/auth.guard';
import { deactivateGuard } from './guards/deactivate.guard';
import { articleResolverResolver } from './resolvers/article-resolver.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'article/list', component: ArticleListComponent},
  { path: 'article/create', component: ArticleNewReactiveComponent, canActivate: [authGuard], canDeactivate: [deactivateGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'article/:code', component: ArticleDetailComponent, canActivate: [authGuard], resolve: { article: articleResolverResolver } },
  { path: '**', redirectTo: '/login' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
