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

  like(postId: string, likes: []) {
    return this.http.put('http://localhost:3000/api/likes/' + postId, likes, { withCredentials: true });
  }

  removeLike(postId: string) {
    return this.http.delete('http://localhost:3000/api/likes/' + postId, { withCredentials: true });
  }
}
