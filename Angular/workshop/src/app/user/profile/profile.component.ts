import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
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
    private storage: StorageService,
    private router: Router
  ) { 
  }

  ngOnInit(): void {
    this.user = this.storage.getItem('user');
  }

  onEditClick(): void {
    this.router.navigateByUrl(`${this.user._id}/profile/edit`);
  }

}
