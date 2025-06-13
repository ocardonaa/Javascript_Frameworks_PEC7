import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public registerForm: FormGroup;
  public message = null;
  public username: string = '';
  public password: string = '';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
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
      this.username = this.registerForm.value.username;
      this.password = this.registerForm.value.password;
      this.userService.registerUser(this.username, this.password)
        .subscribe((resp) => {
          console.log('Successfully registered');
          this.message = resp.msg;
          this.router.navigate(['login']);
        }, (err) => {
          console.error('Error registering', err);
          this.message = err.error.msg;
        });
    }
    else {
      console.log('Invalid form');
    }

  }
}
