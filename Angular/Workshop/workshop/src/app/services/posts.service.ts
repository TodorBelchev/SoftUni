import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url: string = 'http://localhost:3000/api/posts?limit=5';

  constructor(
    private http: HttpClient
  ) { }

  getLatest() {
    return this.http.get(this.url);
  }
}
