import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'article/list', component: ArticleListComponent },
  { path: 'article/create', component: ArticleNewReactiveComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'article/:code', component: ArticleDetailComponent },
  { path: '**', redirectTo: '/register' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
