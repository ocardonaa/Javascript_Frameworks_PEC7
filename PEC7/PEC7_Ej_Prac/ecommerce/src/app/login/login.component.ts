import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';
  public loginForm: FormGroup;
  public msg = null;

  private isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    if (token !== undefined) {
      return true;
    }
    else return false;
  }

  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) {
    this.createForm();
    if (!this.isAuthenticated()) {
      this.router.navigate(['login']);
    }
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.username = this.loginForm.value.username;
      this.password = this.loginForm.value.password;
      this.userService.loginUser(this.username, this.password)
        .subscribe((resp) => {
          console.log('Successfully logged in');
          localStorage.setItem('authToken', resp.token);
          this.msg = resp.msg;
          this.router.navigate(['article', 'list']);
        }, (err) => {
          console.error('Error logging in', err);
          this.msg = err.error.msg;
        });
    }
    else {
      console.log('Invalid form');
    }

  }
}
