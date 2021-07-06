import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { ThemesService } from 'src/app/services/themes.service';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-theme-item',
  templateUrl: './theme-item.component.html',
  styleUrls: ['./theme-item.component.css']
})
export class ThemeItemComponent implements OnInit, AfterContentChecked {
  @Input() theme: any;
  isSub: boolean;
  user: IUser;
  isLogged: boolean;
  private userSub: Subscription = new Subscription();
  constructor(
    private storage: StorageService,
    private themeService: ThemesService,
    private userService: UserService
  ) {
    this.isSub = false;
    this.user = {
      _id: '',
      email: '',
      password: '',
      posts: [],
      tel: '',
      themes: [],
      username: ''
    };
    this.isLogged = false;
  }

  ngOnInit(): void {
    // this.userSub = this.userService.user.subscribe((user: IUser) => {
    //   this.user = user;
    // })
    this.user = this.storage.getItem('user');
    this.isLogged = this.userService.getIsLogged();
    if (this.isLogged) {
      this.isSub = this.theme.subscribers.includes(this.storage.getItem('user')._id);
    }
  }

  ngAfterContentChecked(): void {

  }

  onSubscribe(): void {
    this.theme.subscribers.push(this.user._id);
    this.themeService.subscribeToTheme(this.theme._id).subscribe({
      next: () => {
        this.isSub = true;
      },
      error: (err) => {
        console.log(err.message);
      }
    })
  }

  onUnsubscribe(): void {
    const index = this.theme.subscribers.indexOf(this.user._id);
    this.theme.subscribers.splice(index, 1);
    this.themeService.unsubscribeToTheme(this.theme._id).subscribe({
      next: () => {
        this.isSub = false;
      },
      error: (err) => {
        console.log(err.message);
      }
    })
  }

}