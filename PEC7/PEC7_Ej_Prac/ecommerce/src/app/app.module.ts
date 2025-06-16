import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ArticleService } from './services/article.service';
import { HttpClientModule } from '@angular/common/http';
import { UserStoreService } from './services/user-store.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [ArticleService, UserStoreService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
