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

  async login(data: object): Promise<string> {
    const response: any = await this.http.post('http://localhost:3000/api/login', data).toPromise();
    return response;
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