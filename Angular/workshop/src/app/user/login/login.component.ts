
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from 'src/app/services/storage.service';
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
    private storage: StorageService,
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
    this.userService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.userService.setLogged();
        this.storage.setItem('user', res);
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        console.log(err.message);
      }
    });
  }
}