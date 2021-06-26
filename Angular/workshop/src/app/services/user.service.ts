import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private storage: StorageService,
    private http: HttpClient
  ) {
  }

  login(username: string, password: string): boolean {
    const user = this.http.post('http://localstorage/api/register', { username, password });
    this.storage.setItem('user', user);
    return true;
  }

  register(username: string, password: string): boolean {
    const user = this.http.post('http://localstorage/api/register', { username, password });
    this.storage.setItem('user', user);
    return true;
  }
}
