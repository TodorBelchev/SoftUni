import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogged: boolean;
  constructor(
    private userService: UserService
  ) { 
    this.isLogged = false;
  }

  ngOnInit(): void {
    this.isLogged = this.userService.getIsLogged();
  }

}
