import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faUser, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { rePassMatchValidatorFactory } from 'src/app/shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  faEnvelope = faEnvelope;
  faUser = faUser;
  faPhone = faPhone;
  faLock = faLock;
  registerForm: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    const passwordControl = fb.control('', [Validators.required, Validators.minLength(5)]);
    this.registerForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z0-9\.]{6,}@gmail\.(bg|com)$')
        ]
      ],
      tel: [
        ''
      ],
      password: passwordControl,
      rePass: [
        '',
        [
          rePassMatchValidatorFactory(passwordControl)
        ]
      ]
    })
  }

  async onSubmit() {
    this.userService.register(this.registerForm.value)
      .subscribe(data => {
        this.router.navigateByUrl('/');
      },
        error => {
          console.log(error);
        })
  }

}