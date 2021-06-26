import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  posts: any[];
  constructor(
    private postService: PostsService
  ) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.postService.getLatest().subscribe(data =>
      this.posts = (data as [])
    );
  }

}
