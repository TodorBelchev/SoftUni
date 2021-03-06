import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  url: string = 'http://localhost:3000/api/themes';

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(this.url);
  }

  getById(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  createTheme(theme: object) {
    return this.http.post(this.url, theme, { withCredentials: true });
  }

  subscribeToTheme(id: string) {
    return this.http.put(this.url + '/' + id + '/subscribe', null, { withCredentials: true });
  }

  unsubscribeToTheme(id: string) {
    return this.http.put(this.url + '/' + id + '/unsubscribe', null, { withCredentials: true });
  }
}