import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : any {
    return this.checkLogin();
  }

  checkLogin() {
    if(this.userService.getIsLogged()) { return true; }

    return this.router.parseUrl('/login');
  }
}