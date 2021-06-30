import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  isLogged: boolean;
  constructor(
    private http: HttpClient
  ) {
    this.token = null;
    this.isLogged = false;
  }

  login(data: object): Observable<any> {
    return this.http.post('http://localhost:3000/api/login', data, { withCredentials: true });
  }

  setLogged(): void {
    this.isLogged = !this.isLogged;
  }

  getIsLogged(): boolean {
    return this.isLogged;
  }

  async register(data: object): Promise<string> {
    const response: any = await this.http.post('http://localhost:3000/api/register', data, { withCredentials: true }).toPromise();
    return response;
  }

  async logout(token: string): Promise<string> {
    const response: any = await this.http.post('http://localhost:3000/api/logout', token).toPromise();
    this.isLogged = false;
    return response;
  }

  updateProfile(data: object) {
    return this.http.put('http://localhost:3000/api/users/profile/', data, { withCredentials: true });
  }

}