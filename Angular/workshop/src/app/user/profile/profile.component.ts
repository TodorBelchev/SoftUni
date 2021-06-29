import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: IUser = {
    themes: [],
    posts: [],
    tel: '',
    email: '',
    username: '',
    password: ''
  };
  constructor(
    private storage: StorageService
  ) { 
  }

  ngOnInit(): void {
    this.user = this.storage.getItem('user');
  }

  onEditClick(): void {
    
  }

}
