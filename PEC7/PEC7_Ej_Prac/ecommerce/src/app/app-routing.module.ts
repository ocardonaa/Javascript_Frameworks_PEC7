import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full' },
  { path: 'article', loadChildren: () => import('./article/article.module').then(m=>m.ArticleModule)},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m=>m.UserModule) },
  { path: '**', redirectTo: 'user/register' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
