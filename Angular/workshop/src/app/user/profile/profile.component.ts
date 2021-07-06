import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: IUser = {
    _id: '',
    themes: [],
    posts: [],
    tel: '',
    email: '',
    username: '',
    password: ''
  };
  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUserData() as IUser;
  }

  onEditClick(): void {
    this.router.navigateByUrl(`${this.user._id}/profile/edit`);
  }

}
