import { AfterContentChecked, Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterContentChecked {
  user: any = {};
  constructor(
    private storage: StorageService,
    private userService: UserService,
    private router: Router
  ) { }

  get isLogged(): boolean {
    return this.storage.getItem('user') != null;
  }

  async logoutHandler(): Promise<any> {
    try {
      await this.userService.logout(this.user.username);
      this.storage.removeItem('user');
      this.router.navigateByUrl('/');
    } catch (error) {
      console.log(error.message);
    }
  }

  ngAfterContentChecked(): void {
    this.user = this.storage.getItem('user');
  }

}