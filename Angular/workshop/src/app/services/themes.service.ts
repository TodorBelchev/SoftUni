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
}
