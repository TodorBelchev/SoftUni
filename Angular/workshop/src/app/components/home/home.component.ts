import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  isLogged: boolean = false;
  private userSub: Subscription = new Subscription();
  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.isLogged = this.userService.getIsLogged();
    this.userSub = this.userService.user.subscribe(user => {
      this.isLogged = !!user;
    })
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}