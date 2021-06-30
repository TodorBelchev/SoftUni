import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { PostsService } from 'src/app/services/posts.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  @Input() comment: any;
  isLiked: boolean;
  user: IUser;
  constructor(
    private postsService: PostsService,
    private storage: StorageService
  ) {
    this.comment = {};
    this.isLiked = false;
    this.user = {
      _id: '',
      email: '',
      password: '',
      posts: [],
      tel: '',
      themes: [],
      username: ''
    };
  }

  ngOnInit(): void {
    this.user = this.storage.getItem('user');
    if (this.comment.likes.includes(this.user._id)) {
      this.isLiked = true;
    }
  }

  onLikeClick(): void {
    const likesArr = this.comment.likes.slice();
    likesArr.push(this.user._id);
    this.postsService.like(this.comment._id, likesArr).subscribe({
      next: () => {
        this.isLiked = true;
        this.comment.likes.push(this.user._id);
      },
      error: (err) => {
        console.log(err.message);
      }
    });
  }

  onDislikeClick(): void {
    this.postsService.removeLike(this.comment._id).subscribe({
      next: () => {
        this.isLiked = false;
        const index = this.comment.likes.indexOf(this.user._id);
        this.comment.likes.splice(index, 1);
      },
      error: (err) => {
        console.log(err.message);
      }
    });
  }

}
