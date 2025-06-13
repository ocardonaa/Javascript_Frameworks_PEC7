import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';
import { Article } from '../model/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})


export class ArticleNewReactiveComponent {

  public articleForm: FormGroup;
  public article: Article;
  public message = null;

  constructor(private fb: FormBuilder, private articleService: ArticleService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.articleForm = this.fb.group({
      name: new FormControl(null, [Validators.required, this.NameArticleValidator]),
      url: new FormControl(null, [Validators.required]),
      onSale: new FormControl(false),
      price: new FormControl(null, [Validators.required, this.priceValidator, Validators.min(0.1)])
    })
    this.initializeArticle();
  }

  initializeArticle() {
    this.article =  {
      name: '',
      id: 0,
      price: 0,
      isOnSale: false,
      quantityInCart: 0,
      imageUrl: ''
    };
  }

  onSubmit() {
    if (this.articleForm.valid) {
      const articleToCreate = this.articleForm.value;
      this.articleService.createArticle(articleToCreate).subscribe((result: any) => {
        this.message = result.msg;
        this.initializeArticle();
        this.router.navigate(['article', 'list']);
      }, (err: { msg: any; }) => {
        this.message = err.msg;
      })
    } else {
      console.log("Invalid form");
    }
  }

  priceValidator: ValidatorFn = (control: AbstractControl) => {
    const value = control.value;
    if (value === null || value === '') {
      return null;
    }
    return isNaN(Number(value)) ? { notANumber: true } : null;
  };

  urlValidator: ValidatorFn = (control: AbstractControl) => {
    const url = control.value;
    if (!url) {
      return null;
    }
    const pattern = /^https?:\/\/[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9.\-]*)*$/;
    const valid = pattern.test(url);
    return valid ? null : { invalidUrl: true };
  };

  NameArticleValidator: ValidatorFn = (control: AbstractControl) => {
    const forbiddenNames = ['Prueba', 'Test', 'Mock', 'Fake'];
    const name = control.value;
    return forbiddenNames.includes(name) ? { invalidName: true } : null;
  };

}
