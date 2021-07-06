import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: IUser = {
    _id: '',
    themes: [],
    posts: [],
    tel: '',
    email: '',
    username: '',
    password: ''
  };
  editForm: FormGroup;
  constructor(
    private storage: StorageService,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.editForm = this.fb.group({
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
      tel: ''
    })
  }

  ngOnInit(): void {
    this.user = this.userService.getUserData() as IUser;
    this.editForm.get('username')?.setValue(this.user.username);
    this.editForm.get('email')?.setValue(this.user.email);
    this.editForm.get('tel')?.setValue(this.user.tel);
  }

  onSubmit(): void {
    this.userService.updateProfile(this.editForm.value).subscribe({
      next: (user) => {
        this.storage.setItem('user', user);
        this.router.navigateByUrl(`${this.user._id}/profile`);
      },
      error: (err) => {
        console.log(err.message);
      }
    })
  }

}
