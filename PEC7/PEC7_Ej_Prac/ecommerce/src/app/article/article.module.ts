import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { ArticleNewReactiveComponent } from '../article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleRoutingModule } from './article-routing.module';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [ArticleDetailComponent, ArticleItemComponent, ArticleListComponent, ArticleNewReactiveComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule
  ],
})
export class ArticleModule { }
