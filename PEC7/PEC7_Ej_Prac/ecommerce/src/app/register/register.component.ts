import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public registerForm: FormGroup;
  public message = null;

  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.createRegister();
  }

  createRegister() {
    this.registerForm = this.fb.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Send to service')
    } else {
      console.log("Invalid form");
    }
  }
}
