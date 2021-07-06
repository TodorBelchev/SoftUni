import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: any = {};
  isLogged: boolean = false;
  userSub: Subscription = new Subscription();
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  logoutHandler(): void {
    this.userService.logout(this.user.username).subscribe(
      res => {
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      })
  }

  ngOnInit(): void {
    this.isLogged = this.userService.getIsLogged();
    this.userSub = this.userService.user.subscribe(user => {
      this.isLogged = !!user;
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}