import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  constructor(
    private http: HttpClient
  ) {
    this.token = null;
  }

  login(data: object) {
    return this.http.post('http://localhost:3000/api/login', data, { withCredentials: true });
  }

  async register(data: object): Promise<string> {
    const response: any = await this.http.post('http://localhost:3000/api/register', data).toPromise();
    return response;
  }

  async logout(token: string): Promise<string> {
    const response: any = await this.http.post('http://localhost:3000/api/logout', token).toPromise();
    return response;
  }

}