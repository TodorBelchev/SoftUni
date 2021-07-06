
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faLock = faLock;
  loginForm: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z0-9\.]{6,}@gmail\.(bg|com)$')
        ]
      ],
      password: [
        '',
        [
          Validators.minLength(5)
        ]
      ]
    })
  }

  onSubmit() {
    this.userService.login(this.loginForm.value).subscribe(
      data => {
        this.router.navigateByUrl('/');
      },
      error => {
        console.log(error);
      }
    );
  }

}