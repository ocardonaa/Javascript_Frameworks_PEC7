import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginForm: FormGroup;
  public message = null;

  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.createRegister();
  }

  createRegister() {
    this.loginForm = this.fb.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login to service')
    } else {
      console.log("Invalid form");
    }
  }
}
