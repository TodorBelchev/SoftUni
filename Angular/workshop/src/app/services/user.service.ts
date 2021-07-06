import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  isLogged: boolean;
  user = new Subject();
  userData = {};
  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {
    this.token = null;
    this.isLogged = this.storage.getItem('user') !== null;
  }

  login(data: object): Observable<any> {
    return this.http.post('http://localhost:3000/api/login', data, { withCredentials: true })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(err.message);
        }),
        tap(resData => {
          this.storage.setItem('user', resData);
          this.user.next(resData);
          this.isLogged = true;
          this.userData = resData;
        }));
  }

  setLogged(): void {
    this.isLogged = !this.isLogged;
  }

  getIsLogged(): boolean {
    return this.isLogged;
  }

  getUserData() {
    return this.userData;
  }

  register(data: object): Observable<any> {
    return this.http.post('http://localhost:3000/api/register', data, { withCredentials: true })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(err.message);
        }),
        tap(resData => {
          this.storage.setItem('user', resData);
          this.user.next(resData);
          this.isLogged = true;
          this.userData = resData;
        })
      );
  }

  logout(token: string): Observable<any> {
    this.isLogged = false;
    return this.http.post('http://localhost:3000/api/logout', token)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(err.message);
        }),
        tap(res => {
          this.storage.removeItem('user');
          this.user.next(null);
          this.isLogged = false;
        })
      )
  }

  updateProfile(data: object) {
    return this.http.put('http://localhost:3000/api/users/profile/', data, { withCredentials: true })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(err.message)
        }),
        tap(res => {
          this.storage.setItem('user', res);
          this.user.next(res);
          this.userData = res;
        })
      );
  }

}